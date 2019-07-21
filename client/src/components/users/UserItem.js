import React, { useContext } from 'react';
import UserContext from '../../context/user/userContext';


const UserItem = ({ user }) => {
  const userContext = useContext(UserContext);
  const { deleteUser, setCurrentUser, clearCurrentUser } = userContext;

  const { _id, name, email, admin } = user;

  const onDelete = () => {
    deleteUser(_id);
    clearCurrentUser()
  }


  return (
    <div className='card bg-light'>
      <h3 className="text-primary text-left">
        {name}{' '}
        <span style={{ float: 'right' }}
          className={
            'badge ' +
            (admin === true || admin === "true" ? 'badge-danger' : 'badge-success')}>

          {(admin === true || admin === "true") ? 'admin' : 'user'}
        </span>
      </h3>
      <ul className="list">
        {email && (<li>
          <i className="fas fa-envelope-open" /> {email}
        </li>)}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrentUser(user)}
        >Edit</button>
        <button
          className="btn btn-danger btn-sm" onClick={onDelete}
        >Delete</button>
      </p>
    </div>
  )
}



export default UserItem;
