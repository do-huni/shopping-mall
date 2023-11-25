import "./Account.css";
import React from "react";

function InputForm(props) {
	
  return (
    <div className = {"InputFormWrapper"}>		  
		  <label htmlFor = "inputid">{props.name}</label>
		  <input type ={props.type} value={props.val} onChange={props.handler} id = "inputid" className = {(props.check)?"InputTrue":"InputFalse"}/>		 
		  <div className = {"InputFormMessage"}>{props.message}</div>
    </div>
  );
}

export default InputForm;
