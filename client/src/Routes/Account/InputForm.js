import "./Account.css";
import React from "react";

function InputForm(props) {
	
  return (
    <div className = {"InputFormWrapper"}>		  
		  <label htmlFor = {props.name}>{props.name}</label>
		  <input type ={props.type} value={props.val} onChange={props.handler} id = {props.name} className = {(props.check)?"InputTrue":"InputFalse"}/>		 
		  <div className = {"InputFormMessage"}>{props.message}</div>
    </div>
  );
}

export default InputForm;
