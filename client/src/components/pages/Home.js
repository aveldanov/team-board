import React, { useContext, useEffect } from 'react';
import Tasks from '../../components/tasks/Tasks';
import TaskForm from '../tasks/TaskForm';
import AuthContext from '../../context/auth/authContext';


const Home = () => {

  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line 
  }, []);


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
