import React from "react";
import "./style.css"

function employeeTable(props){
  let dob = props.DOB.substring(0,10);
  console.log(dob);
return(
  <tr>
    <td><img alt={props.fname} src={props.image}></img></td>
    <td>{props.tname}.{props.fname} {props.lname}</td>
    <td>{props.phone}</td>
    <td>{props.email}</td>
<td>{dob}</td>
  </tr>
  
);
}

export default employeeTable;