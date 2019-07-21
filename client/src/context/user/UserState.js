import React, { useReducer } from 'react';
import axios from 'axios';
import UserContext from './userContext';
import userReducer from './userReducer';

import {
  DELETE_USER,
  UPDATE_USER,
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
  GET_USERS,
  CLEAR_USERS,
  USER_ERROR
} from '../types';


const UserState = props => {
  const initialState = {
    users: null,
    current: null,
    loading: true

  }


  const [state, dispatch] = useReducer(userReducer, initialState);

  // Get Users

  const getUsers = async () => {
    try {
      const res = await axios.get('/api/users')
      dispatch({
        type: GET_USERS,
        payload: res.data
      })


    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: err.response.msg
      })

    }
  }





  // Delete User
  const deleteUser = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`)

      dispatch({
        type: DELETE_USER,
        payload: id
      })

    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: err.response.msg
      })

    }




  }


  // Clear Users


  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS
    })
  }


  // Update User

  const updateUser = user => {
    dispatch({
      type: UPDATE_USER,
      payload: user
    })
  }

  // Set Current User
  const setCurrentUser = user => {
    dispatch({
      type: SET_CURRENT_USER,
      payload: user
    })
  }

  // Clear Current User
  const clearCurrentUser = () => {
    dispatch({
      type: CLEAR_CURRENT_USER
    })
  }






  return (
    <UserContext.Provider
      value={{
        users: state.users,
        current: state.current,
        loading: state.loading,
        deleteUser,
        setCurrentUser,
        clearCurrentUser,
        updateUser,
        getUsers,
        clearUsers

      }}
    >
      {props.children}
    </UserContext.Provider>
  )

}

export default UserState;