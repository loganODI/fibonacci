import React from 'react';
import ReactDOM from 'react-dom'
import Navbar from '../ui/navbar';
import AddEmployee from '../employee/addEmployee';
import {Employees} from "./employees";
import {Tracker} from 'meteor/tracker';

Tracker.autorun(()=>{
  let employeeList = Employees.find().fetch();

  
  const renderEmployees = function(employeesList){
    return employeesList.map(function (employee) {
    return(
      <h1>{employee.name} Hello!</h1>
   );
  });
  }


export default class EmployeeDashboard extends React.Component{
    render() {
      return (
        <div>
          <Navbar/>
          <AddEmployee/>
          {renderEmployees(employeeList)}
          
        </div>
      )
    }
}



console.log("EMPLOYE",employeeList);

  


});


