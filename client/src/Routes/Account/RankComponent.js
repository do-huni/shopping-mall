import "./Account.css";
import React from "react";

function RankComponent(props) {
  const rankColor = ["#ffdc02", '#ffccb6', "#f3b0c3", "#abdee6", "#cbaacb"]	
  return (
    <span className = {"rankComponent"} style = {{background: rankColor[props.rank]}}>		  
		  {props.rank}
    </span>
  );
}

export default RankComponent;
