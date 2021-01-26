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
          <TableHeader/>
       </thead>
       <tbody>
            {this.state.employees.map(employee => (
                 <EmployeeTable  key={employee.name.first} image={employee.picture.thumbnail} 
                    tname ={employee.name.title}
                    fname={employee.name.first} 
                    lname ={employee.name.last} 
                    phone={employee.phone}  
                    email={employee.email} 
                    DOB={employee.dob.date}/>
              ))}
        </tbody>
      </table>
     </div>
     </Wrapper>
      );
    };
}

export default App;
