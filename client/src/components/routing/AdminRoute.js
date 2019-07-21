import React, { useContext } from 'react'
import AuthContext from '../../context/auth/authContext';

import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {

  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading, user } = authContext;


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

  // console.log("[ADMIN] ", user);


  return (
    <Route {...rest} render={props => (!isAuthenticated && !loading) || (user !== null && user.admin === "user" && !loading) ? (
      <Redirect to='/login' />
    ) : (
        <Component {...props} />

      )


    } />
  )
}

export default PrivateRoute;