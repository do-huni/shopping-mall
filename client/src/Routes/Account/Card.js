import "./Account.css";
import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  MouseEvent,
} from "react";

function Card(props) {


  return (
	<>
	<div className = "cardContainer">
		  <div className = "cardIcon">{props.icon()}</div>
		  <div className = "cardTitle">{props.title}</div>
		  <div className = "cardContent">{props.content}</div>
	</div>
	</>
  );
}

export default Card;
