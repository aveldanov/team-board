import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Team from './components/pages/Team';
import TaskState from './contexts/task/TaskState';


const App = () => {
  return (
    <TaskState>
      <Router>
        <Fragment className="App">
          <Navbar />
          My App
  <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/team' component={Team} />

            </Switch>
          </div>
        </Fragment>

      </Router>
    </TaskState>
  );
}

export default App;
