import React, {Component} from "react";
import EmployeeTable from "./components/employeeTable/index";
import Header from "./components/Header/index";
import Wrapper from "./components/Wrapper/index";
import employees from "../src/employees.json";
import TableHeader from "./components/tableHeader/index";
import API from "./utils/API"

class App extends Component{

  //setting the state for employees json array


  state = {
    employees: employees
    ,filterBox:""
  };

  
componentDidMount(){
this.setState({employees:employees});
};


  handleInputChange = event =>{
  // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
    
  
var employees = this.state.employees.filter(item => item.name.first.match(this.state.filterBox))
this.setState({employees:employees});  
    
  
}

  render(){
    return (
    <Wrapper>
    <Header></Header> 
   
    <form className="form">
          <input
            value={this.state.filterBox}
            name="filterBox"
            onChange={this.handleInputChange}
            type="text"
            placeholder=""
          />
    </form>
   <div class="container">
     <table class="table table-striped">
       <thead>
          <TableHeader/>
       </thead>
          <EmployeeTable result = {this.state.employees} />
      </table>
     </div>
     </Wrapper>
      );
    };
}

export default App;
