import React from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {Tracker} from 'meteor/tracker';
import Signup from "../imports/ui/Signup";
import Login from "../imports/ui/Login";
import employeeDashboard from '../imports/employee/employeeDashboard';
import {Employees} from '../imports/employee/employees';

ReactDOM.render((
  <Router>
    <div>
      <Route path="/signup" component = {Signup}/>
      <Route path="/login" component = {Login}/>
      <Route path="/employees" component = {employeeDashboard}/>
    </div>
  </Router>
), document.getElementById("app"));

Tracker.autorun(()=>{
  const isAuthenticated = !!Meteor.userId();
  console.log('isAuthenticated', isAuthenticated);
  console.log(Employees.find().fetch());
});



