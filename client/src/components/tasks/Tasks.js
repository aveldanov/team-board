import React, { Fragment, useContext } from 'react';
import TaskContext from '../../contexts/task/taskContext';
import TaskItem from './TaskItem';


const Tasks = () => {
  const taskContext = useContext(TaskContext);

  const { tasks } = taskContext;


  console.log(tasks.map((task) => task));

  return (
    <div>
      {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
    </div>
  )
}

export default Tasks;
