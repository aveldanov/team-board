import React, { useReducer } from 'react';
import axios from 'axios';
import TaskContext from './taskContext';
import taskReducer from './taskReducer';


import {
  ADD_TASK,
  DELETE_TASK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TASK,
  TASK_ERROR,
  GET_TASKS,
  CLEAR_TASKS,
  GET_ALL_TASKS
} from '../types';


const TaskState = props => {
  const initialState = {
    tasks: null,
    current: null,
    error: null
  }


  const [state, dispatch] = useReducer(taskReducer, initialState);


  // Get Tasks
  const getTasks = async () => {
    try {
      const res = await axios.get('/api/tasks');

      dispatch({
        type: GET_TASKS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: TASK_ERROR,
        payload: err.response.msg
      })
    }
  }


  // Get All Tasks
  const getAllTasks = async () => {
    try {
      const res = await axios.get('/api/tasks/team');
      // console.log("GET ALL TASKS ", res.data.user.name);


      dispatch({
        type: GET_ALL_TASKS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: TASK_ERROR,
        payload: err.response.msg
      })
    }
  }




  // Add task

  const addTask = async (task) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }


    try {
      const res = await axios.post('/api/tasks', task, config);

      dispatch({
        type: ADD_TASK,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: TASK_ERROR,
        payload: err.response.msg
      })
    }


  }

  // Delete task

  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);

      dispatch({
        type: DELETE_TASK,
        payload: id
      })
    } catch (err) {

      dispatch({
        type: TASK_ERROR,
        payload: err.response.msg
      })
    }

  }



  // Update task


  const updateTask = async (task) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.put(`/api/tasks/${task._id}`, task, config);


      dispatch({
        type: UPDATE_TASK,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: TASK_ERROR,
        payload: err.response.msg
      })
    }




  }


  // Clear tasks
  const clearTasks = () => {

    dispatch({
      type: CLEAR_TASKS
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





  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        current: state.current,
        error: state.error,
        addTask,
        deleteTask,
        setCurrent,
        clearCurrent,
        updateTask,
        getTasks,
        clearTasks,
        getAllTasks
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )


}

export default TaskState;