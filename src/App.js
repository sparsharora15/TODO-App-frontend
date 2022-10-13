import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard"
import Login from "./Components/Auth/Login"
import AddTask from "./Components/Addtask/AddTask"
import EditTask from "./Components/EditTask/EditTask";
import Signup from './Components/Auth/Signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact  path="/add-task">
          <AddTask />
        </Route>
        <Route exact path="/edit/:id">
          <EditTask />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
