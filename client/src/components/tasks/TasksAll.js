import React, { useContext, useEffect, Fragment } from 'react';
import TaskContext from '../../contexts/task/taskContext';
import TaskItemBox from './TaskItemBox';
import Spinner from '../layout/Spinner';
import _ from 'lodash';



const TasksAll = () => {
  const taskContext = useContext(TaskContext);


  const { tasks, getAllTasks, loading } = taskContext;
  console.log(tasks);



  useEffect(() => {
    getAllTasks();
    // eslint-disable-next-line
  }, []);

  const grouped = _.groupBy(tasks, 'user.name')
  // console.log(grouped);
  console.log(Object.keys(grouped).map((item) => grouped[item].map((el) => el.message)))

  console.log(tasks);



  return (
    <Fragment>

      <div >
        {tasks !== null && !loading ? (
          <div className="grid-3">
            {Object.keys(grouped).map((item) => <div key={item} ><h3>{item}</h3>


              {grouped[item].map((el) => <TaskItemBox key={el._id} task={el} />)}


            </div>)}
          </div>

        ) : <Spinner />}
      </div>



    </Fragment>
  )
}

export default TasksAll
