import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">My Tasks</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
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
