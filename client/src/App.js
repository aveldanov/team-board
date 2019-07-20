import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Team from './components/pages/Team';
import TaskState from './context/task/TaskState';
import AuthState from './context/auth/AuthState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AlertState from './context/alert/AlertState';
import Alerts from './components/layout/Alerts';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';

import playground from './playground/playground';



if (localStorage.token) {
  setAuthToken(localStorage.token);
}



const App = () => {
  return (
    <AuthState>
      <TaskState>
        <AlertState>
          <Router>
            <Fragment className="App">
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/team' component={Team} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/playground' component={playground} />
                </Switch>
              </div>
            </Fragment>

          </Router>
        </AlertState>
      </TaskState>
    </AuthState>
  );
}

export default App;
