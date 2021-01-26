import React from "react";
import "./style.css"

function employeeTable(props){
return(<div class="container">
  
 <table class="table table-striped"> 
 <tbody>
  <tr>
    <td class="tableRow"><img src={props.image}></img></td>
    <td class="tableRow">{props.name}</td>
    <td class="tableRow">{props.phone}</td>
    <td class="tableRow">{props.email}</td>
    <td class="tableRow">{props.DOB}</td>
  </tr>
  </tbody>
</table> 

</div>

);
}

export default employeeTable;