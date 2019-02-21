import React from 'react';
import {Employees} from "./employees";




export default class AddEmployee extends React.Component{
render() {
  return (
    <div>
      <p>Add an employee</p>
      <form onSubmit={handleSubmit}>
          <input type="text" name="name"placeholder="Name"></input>
          <input type="text" name="hrsAvailable"placeholder="Hours Available"></input>
          <input type="text" name="currentJob"placeholder="Current Job"></input>
          <button>Add Employee</button>
      </form>
    </div>
  )
}
}



const handleSubmit = function (e){
  e.preventDefault();
  Employees.insert({name:e.target.name.value, hoursAvailable:e.target.hrsAvailable.value, currentJob:e.target.currentJob.value});
  
 
}