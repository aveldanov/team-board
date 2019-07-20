import React, { useContext } from 'react';
import TaskContext from '../../contexts/task/taskContext';
import AuthContext from '../../contexts/auth/authContext';

const TaskItem = ({ task }) => {

  const taskContext = useContext(TaskContext);

  const authContext = useContext(AuthContext);

  const { deleteTask, setCurrent, clearCurrent } = taskContext;
  const { message, _id, user } = task;

  const onDelete = () => {
    deleteTask(_id);
    clearCurrent();
  }



  return (
    <div className='card bg-light grid-2'>
      <h3 className="text-primary text-left">
        {message}




      </h3>
    </div>
  )
}

export default TaskItem
