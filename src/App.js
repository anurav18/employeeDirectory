import React from "react";
import EmployeeTable from "./components/employeeTable/index";
import Header from "./components/Header/index";
import Wrapper from "./components/Wrapper/index"

function App() {
  return (<Wrapper>
      <Header></Header> 
     <EmployeeTable/>
      </Wrapper>
      );
}

export default App;
