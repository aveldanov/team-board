import React, { Fragment, useContext, useEffect } from 'react';
import TaskContext from '../../context/task/taskContext';
import TaskItem from './TaskItem';
import Spinner from '../layout/Spinner';


const Tasks = () => {
  const taskContext = useContext(TaskContext);

  const { tasks, getTasks, loading } = taskContext;
  console.log(tasks);

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line
  }, [])




  return (
    <Fragment>




      {tasks !== null && !loading ? (
        < div >
          {tasks.map((task) => <TaskItem key={task._id} task={task} />)}
        </div>
      ) : <Spinner />}

    </Fragment>
  )
}

export default Tasks;
