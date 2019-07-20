import React from 'react';


const TaskItem = ({ task }) => {

  const { message } = task;

  return (
    <div className='card bg-light grid-2'>
      <h3 className="text-primary text-left">
        {message}

      </h3>
    </div>
  )
}

export default TaskItem
