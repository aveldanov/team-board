import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import TaskContext from '../../context/task/taskContext';
import UserContext from '../../context/user/userContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const taskContext = useContext(TaskContext);
  const userContext = useContext(UserContext);
  const { clearUsers } = userContext;

  const { isAuthenticated, logout, user } = authContext;
  const { clearTasks } = taskContext;



  const onLogout = () => {
    logout();
    clearTasks();
    clearUsers()
  }

  const normalizerBoolean = (user) => {
    if (user !== null && user.admin === true) {
      return user.admin = "admin"
    }
    if (user !== null && user.admin === false) {
      return user.admin = "user"

    }
    return user
  }
  normalizerBoolean(user);
  console.log(user);


  const authLinks = (
    <Fragment>
      <li>
        <Link to="/">My Tasks</Link>
      </li>
      <li>
        <Link to="/team">Team</Link>
      </li>
      <li>
        {user && (user.admin === "admin") ? <Link to="/admin">Admin</Link> : null}
      </li>
      <li>Hello {user && user.name} &nbsp;</li>

      <li> Type {user && user.admin}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>

      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  )

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        {isAuthenticated ? authLinks : guestLinks}

      </ul>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Team Board',
  icon: 'fas fa-bacon'
}

export default Navbar;
