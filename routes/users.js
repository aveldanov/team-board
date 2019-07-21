const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

const User = require('../models/User');
const Task = require('../models/Task');


// @route POST api/users
// @desc Register user
// @access Public

router.post('/', [
  check('name', 'Please add name')
    .not()
    .isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please use a password with 6 or more characters').isLength({
    min: 6
  })
],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({
        email
      });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' })
      }

      user = new User({
        name,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 360000
      }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });

    } catch (err) {
      console.error(error);
      res.status(500).send('[routes/users] Server error');
    }
  });


// @route GET api/users
// @desc Get All users
// @access Private

router.get('/', auth, async (req, res) => {

  const loggeduser = await User.findById(req.user.id).select('-password');
  // res.json(user);


  try {

    if (loggeduser.admin !== true) {
      return res.status(401).json({ msg: '[routes/contacts] Not authorized' })
    }


    const users = await User.find();
    res.json(users)

  } catch (err) {
    console.error(error);
    res.status(500).send('[routes/users] Server error');
  }
});


// @route PUT api/users
// @desc Edit user's rights
// @access Private

router.put('/:id', auth, async (req, res) => {
  const loggeduser = await User.findById(req.user.id).select('-password');


  const { admin, name, email, password } = req.body;

  console.log('Out', req.params.id);


  const userFields = {}
  if (name) userFields.name = name;
  if (email) userFields.email = email;
  if (admin) userFields.admin = admin;
  if (password) userFields.password = password;


  try {
    if (loggeduser.admin !== true) {
      return res.status(401).json({ msg: '[routes/contacts] Not authorized' })
    }


    let user = await User.findById(req.params.id);
    console.log('USER: ', user);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }


    user = await User.findByIdAndUpdate(req.params.id,
      { $set: userFields },
      { new: true })
    res.json(user);


  } catch (err) {
    console.error("Error message", err);
    res.status(500).send('[routes/users] Server error');
  }

});


// @route DELETE api/users
// @desc Delete a user
// @access Private

router.delete('/:id', auth, async (req, res) => {
  const loggeduser = await User.findById(req.user.id).select('-password');
  console.log('[Delete - logged user] ', loggeduser);

  console.log('[Delete - user to delete: ', req.params.id);


  try {
    if (loggeduser.admin !== true) {
      return res.status(401).json({ msg: '[routes/contacts] Not authorized' })
    }

    let user = await User.findById(req.params.id);
    console.log("[User to delete from DB ]", user);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    await Task.deleteMany({ user: req.params.id });

    // res.json(tasks)


    // await User.findByIdAndRemove(req.params.id);
    res.json({ msg: 'User Deleted' })

  } catch (err) {
    console.error("Error message", err);
    res.status(500).send('[routes/users] Server error');
  }
});


module.exports = router;