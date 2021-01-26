import React from "react";
import  EmployeeTable from "../employeeTable/index";
import "./style.css";

function tableHeader(){
return(
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

 </table>
  
</div>
)
}

export default tableHeader;