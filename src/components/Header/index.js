import React from "react";
import "./style.css";

function header()
{
    return(<div class="jumbotron jumbotron-fluid" id="header">
    <div class="container">
      <h1 class="display-4">Employee Directory</h1>
      <p class="lead">Click on the carrots to filter by heading or use the search box to narrow your results.</p>
    </div>
  </div>);

}

export default header;