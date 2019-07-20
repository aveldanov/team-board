const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');


const Task = require('../models/Task');
const User = require('../models/User');



// @route GET api/tasks
// @desc Get all your tasks
// @access Private

router.get('/', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).sort({ date: -1 });
    res.json(tasks)

  } catch (err) {
    console.error(error);
    res.status(500).send('[routes/tasks] Server error');
  }
});

// @route GET api/tasks/team
// @desc Get all tasks of the team
// @access Private

router.get('/team', auth, async (req, res) => {
  try {
    const tasks = await Task.find().populate('user').sort({ user: 1 }).sort({ date: -1 });
    res.json(tasks)
  } catch (err) {
    console.error(error);
    res.status(500).send('[routes/tasks] Server error');
  }

});



// @route POST api/tasks
// @desc Add task
// @access Private

router.post('/', [auth, [
  check('message', 'The field is empty').not().isEmpty()
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { message } = req.body;

  try {
    const newTask = new Task({
      message,
      user: req.user.id
    });

    const task = await newTask.save();
    res.json(task);

  } catch (err) {
    console.error(error);
    res.status(500).send('[routes/tasks] Server error');
  }

});


// @route PUT api/tasks/:id
// @desc Update task
// @access Private

router.put('/:id', auth, async (req, res) => {

  console.log("OUT", req.body);

  const { message } = req.body;

  // Build task object

  const taskFields = {};

  if (message) taskFields.message = message;

  try {
    let task = await Task.findById(req.params.id);
    console.log("OUT", req.params.id);


    if (!task) {
      return res.status(404).json({
        msg: 'task does not exist'
      })
    };

    // Make sure user owns task

    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    task = await Task.findByIdAndUpdate(req.params.id,
      { $set: taskFields },
      { new: true }
    )
    res.json(task)
  } catch (err) {
    console.error(error);
    res.status(500).send('[routes/tasks] Server error');
  }


});





// @route DELETE api/tasks/:id
// @desc Delete task
// @access Private

router.delete('/:id', auth, async (req, res) => {

  try {
    let task = await Task.findById(req.params.id);
    console.log("OUT", req.params.id);


    if (!task) {
      return res.status(404).json({
        msg: 'task does not exist'
      })
    };

    // Make sure user owns task

    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Task.findByIdAndRemove(req.params.id);

    res.json({ msg: "Task removed" })
  } catch (err) {
    console.error(error);
    res.status(500).send('[routes/tasks] Server error');
  }
});


module.exports = router;