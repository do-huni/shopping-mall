import "./Account.css";
import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  MouseEvent,
} from "react";
import { useNavigate } from 'react-router-dom';

function Card(props) {
 const navigate = useNavigate();

  return (
	<>
	<div className = "cardContainer" onClick = {()=>{navigate(props.link)}}>
		  <div className = "cardIcon">{props.icon()}</div>
		  <div className = "cardTitle">{props.title}</div>
		  <div className = "cardContent">{props.content}</div>
	</div>
	</>
  );
}

export default Card;
