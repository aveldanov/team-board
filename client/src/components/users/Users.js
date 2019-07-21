import React, { Fragment, useContext, useEffect } from 'react';
import UserContext from '../../context/user/userContext';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = () => {

  const userContext = useContext(UserContext);


  const { users, getUsers, loading } = userContext;

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, [])


  return (
    <Fragment>
      {users !== null && !loading ? (
        <div>
          {users.map((user) => (
            <UserItem key={user._id} user={user} />

          ))}
        </div>) : <Spinner />}
    </Fragment>
  )
}

export default Users
