import React from 'react';
import './App.css';
import Login from './component/Login'
import { PrivateRoute } from './component/PrivateRoute';
import Friends from './component/Friends';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
    <Link to="/login">Login</Link>
    <Switch>
     <PrivateRoute exact path='/friends' component={Friends} />
     <Route path="/login" component={Login} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
