import React, { useContext, useEffect } from 'react'; import TasksAll from '../tasks/TasksAll';
import AuthContext from '../../contexts/auth/authContext';

const Team = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line 
  }, []);
  return (
    <div>
      <h1>TEAM</h1>
      <TasksAll />
    </div>
  )
}

export default Team;
