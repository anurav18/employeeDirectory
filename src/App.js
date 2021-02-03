import React, {Component} from "react";
import EmployeeTable from "./components/employeeTable/index";
import Header from "./components/Header/index";
import Wrapper from "./components/Wrapper/index";
import TableHeader from "./components/tableHeader/index";
import API from "./utils/API"

class App extends Component{

  //setting the state for employees json array


  state = {
    employees: [],
    filterBox:"",
    filteredEmployees:[],
    sortAsc: true,
  };

  
componentDidMount(){
   this.getEmployees();
};

// Get Random users by using the API end point 
getEmployees = () =>{
  API.getAllUsers().then(res => {
    this.setState({ employees: res.data.results, filteredEmployees: res.data.results })
}).catch(err => console.log(err));
}


handleInputChange = event =>{
  // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
   // Updating the input's state
    this.setState({
      [name]: value
});

this.setState({
  filteredEmployees:this.state.employees.filter(
    person => person.name.first.toLowerCase().includes(value.toLowerCase()))
}
) 
}

sortTable = () => {

    let sortedEmployees;
    let toggleSort = !this.state.sortAsc;
    if (toggleSort) {
      sortedEmployees = this.state.filteredEmployees.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
    } else {
      sortedEmployees = this.state.filteredEmployees.sort((b, a) => (a.name.first > b.name.first) ? 1 : -1);

    }
    this.setState({
      filteredEmployees: sortedEmployees,
      sortAsc: toggleSort
    })
}

  render(){
    return (
    <Wrapper>
    <Header></Header> 
   
    <form className="form" style={{textAlign :"center",marginBottom:20}}>
          <input
            value={this.state.filterBox}
            name="filterBox"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Filter by First Name"
          /><button type="button" class="btn btn-primary" onClick={this.sortTable}>Sort By First Name</button>
    </form>
   <div class="container">
     <table class="table table-striped">
       <thead>
          <TableHeader/>
       </thead>
          <EmployeeTable result = {this.state.filteredEmployees} filter={this.state.filterBox}/>
      </table>
     </div>
     </Wrapper>
      );
    };
}

export default App;
