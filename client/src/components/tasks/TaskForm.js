import React, { useState, useContext, useEffect } from 'react';
import TaskContext from '../../contexts/task/taskContext';


const TaskForm = () => {

  const taskContext = useContext(TaskContext);

  const { addTask, current, clearCurrent, updateTask } = taskContext;

  useEffect(() => {
    if (current !== null) {
      setTask(current);
    } else {
      setTask({
        message: ''
      })
    }
    // eslint-disable-next-line 
  }, [taskContext, current])



  const [task, setTask] = useState({
    message: ''
  });

  const { message } = task;
  console.log("message: ", message);

  const onChange = (e) => setTask({
    ...task,
    [e.target.name]: e.target.value
  })

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addTask(task);

    } else {

      updateTask(task);
    }


    clearAll()
  }


  const clearAll = () => {
    clearCurrent();
  }

  return (
    <form className="grid-4" onSubmit={onSubmit}>
      <input style={{ gridColumn: "1/4" }} type="text" placeholder="Add a task..." name="message" value={message} onChange={onChange} />
      <input type="submit" value={current ? 'Update task' : 'Add task'} className="btn btn-primary" />
    </form>
  )
}

export default TaskForm;
