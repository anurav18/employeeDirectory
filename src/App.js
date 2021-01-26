import React, {Component} from "react";
import EmployeeTable from "./components/employeeTable/index";
import Header from "./components/Header/index";
import Wrapper from "./components/Wrapper/index";
import employees from "../src/employees.json";
import TableHeader from "./components/tableHeader/index";

class App extends Component{

  //setting the state for employees json array

  state = {
    employees
  };

  render(){
    return (
    <Wrapper>
      <Header></Header> 
<div class="container">
  <table class="table table-striped">
  <thead>
  <tr>
    <th scope="col">Image</th>
    <th scope="col">Name</th>
    <th scope="col">Phone</th>
    <th scope="col">Email</th>
    <th scope="col">DOB</th>
  </tr>
  </thead>
  <tbody>
  {this.state.employees.map(employee => (
    <tr>
     <td ><img src={employee.picture.thumbnail}></img></td>
     <td >{employee.name.first}</td>
     <td >{employee.phone}</td>
     <td >{employee.email}</td>
     <td >{employee.dob.date}</td>
   </tr>   
   ))}
  </tbody>
</table>
 </div>     
     
    </Wrapper>
      );
    };
}

export default App;
