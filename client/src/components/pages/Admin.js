import React, { useContext, useEffect } from 'react';
import Users from '../../components/users/Users';
import UserForm from '../users/UserForm';
import AuthContext from '../../context/auth/authContext';

const Admin = () => {

  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line 
  }, []);


  return (
    <div className="grid-2">
      <div>
        <UserForm />
      </div>
      <div className="">
        <Users />
      </div>


    </div>
  )
}

export default Admin
