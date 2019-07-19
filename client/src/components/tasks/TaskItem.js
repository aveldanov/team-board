import React, { useContext } from 'react';
import TaskContext from '../../contexts/task/taskContext';

const TaskItem = ({ task }) => {

  const taskContext = useContext(TaskContext);
  const { deleteTask, setCurrent, clearCurrent } = taskContext;
  const { message, id } = task;

  const onDelete = () => {
    deleteTask(id);
    clearCurrent();
  }



  return (
    <div className='card bg-light'>
      <h3 className="text-primary text-left">
        {message}


        <button className="btn btn-danger btn-sm" onClick={onDelete} style={{ float: 'right' }}>Delete</button>
        <button className="btn btn-dark btn-sm" onClick={() => setCurrent(task)} style={{ float: 'right' }}>Edit</button>

      </h3>
    </div>
  )
}

export default TaskItem
