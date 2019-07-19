import React, { useReducer } from 'react';
import uuid from 'uuid';

import TaskContext from './taskContext';
import taskReducer from './taskReducer';


import {
  ADD_TASK,
  DELETE_TASK,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_ALERT,
  REMOVE_ALERT,
  UPDATE_TASK
} from '../types';


const TaskState = props => {
  const initialState = {
    tasks: [
      {
        id: 1,
        message: 'Message1'
      },
      {
        id: 2,
        message: 'Message2'
      },
      {
        id: 3,
        message: 'Message3'
      }
    ],
    current: null
  }


  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Add task

  const addTask = task => {
    task.id = uuid.v4();
    dispatch({
      type: ADD_TASK,
      payload: task
    })

  }

  // Delete task

  const deleteTask = id => {

    dispatch({
      type: DELETE_TASK,
      payload: id
    })

  }

  // Set current task


  const setCurrent = task => {

    dispatch({
      type: SET_CURRENT,
      payload: task
    })

  }


  // Clear current task

  const clearCurrent = () => {

    dispatch({
      type: CLEAR_CURRENT
    })

  }


  // Update task


  const updateTask = task => {

    dispatch({
      type: UPDATE_TASK,
      payload: task
    })

  }




  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        current: state.current,
        addTask,
        deleteTask,
        setCurrent,
        clearCurrent,
        updateTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )


}

export default TaskState;