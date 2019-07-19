import React from 'react';
import Tasks from '../../components/tasks/Tasks';
import TaskForm from '../tasks/TaskForm';


const Home = () => {
  return (
    <div >
      <div>
        <Tasks />
        <TaskForm />
      </div>
    </div>
  )
}

export default Home;
