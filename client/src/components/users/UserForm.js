import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../../context/user/userContext';



const UserForm = () => {
  const userContext = useContext(UserContext);
  const { current, clearCurrentUser, updateUser } = userContext;

  useEffect(() => {
    if (current !== null) {
      setUser(current)
    } else {
      setUser({
        name: '',
        email: '',
        admin: false
      })
    }
  }, [userContext, current])




  const [user, setUser] = useState({
    name: '',
    email: '',
    admin: false
  });


  const { name, email, admin } = user;

  const onChange = (e) => setUser(


    {
      ...user,
      [e.target.name]: e.target.value
    })

  const onSubmit = (e) => {
    e.preventDefault();
    userContext.updateUser(user);
    updateUser(user);
    clearAllUser()
  }

  const clearAllUser = () => {
    clearCurrentUser()
  }




  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Update User</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <h5>User Type</h5>
      <input
        type="radio"
        name="admin"
        value={false}
        onChange={onChange}

        checked={admin === false || admin === "false"}

      /> User{'  '}
      <input
        type="radio"
        name="admin"
        value={true}
        onChange={onChange}

        checked={admin === true || admin === "true"}
      /> Admin

<div>
        <input
          type="submit"
          value="Update User"
          className="btn btn-primary btn-block"
        />
      </div>
      {current && <div>
        <button
          className="btn btn-light btn-block"
          onClick={clearAllUser}
        >Clear</button>

      </div>}
    </form>
  )
}

export default UserForm
