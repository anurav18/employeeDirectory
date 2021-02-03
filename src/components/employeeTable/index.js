import React from "react";


function employeeTable(props){
  
return(
<tbody>
    {props.result.map(item => 
    <tr key={item.index}>
      <td><img alt={item.name.first} src={item.picture.thumbnail}></img></td>
      <td>{item.name.first} {item.name.last}</td>
      <td>{item.phone}</td>
      <td>{item.email}</td>
       <td>{item.dob.date.substring(0,10)}</td>
   </tr>
    )}
 </tbody>  
);
}

export default employeeTable;