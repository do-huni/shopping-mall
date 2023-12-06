import axios from "axios";
import {useEffect, useState} from "react";
import "./Account.css";
import { useNavigate} from 'react-router-dom';
import Card from './Card';
import RankComponent from './RankComponent';
import React from 'react';
import { BsCreditCard, BsCart, BsTruck, BsBox2 } from "react-icons/bs";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function SaleBar(props) {
	const navigate = useNavigate();		
	
  return (
	  <>
	  	<div style = {{width: "15%"}}>
				<div className = "bg-dark col-auto d-flex justify-content-between flex-column px-1 h-100">
					<div>
						<a className = "text-decoration-none text-white d-none d-sm-inline d-flex align-items-center ms-3 mt-3">
							<span className = "ms-1 fs-4 d-none d-sm-inline" onClick = {()=>navigate("/salepage")}>{props.title}</span>
						</a>
						<hr className = "text-secondary d-none d-sm-block"/>						
						<ul className = "nav nav-pills flex-column mt-3 mt-sm-0">
							{props.items.map((data, idx)=>{
								return (
									<li key = {idx} className = "nav-item text-white fs-4 my-1 py-1 py-sm-0">
										<a onClick = {()=>navigate(data.link)} className = "nav-link text-white fs-5" aria-current = "page">
											<i className = {"bi " + data.icon}></i>
											<span className = "ms-3 d-none d-sm-inline">{data.title}</span>
										</a>
									</li>									
								);
							})}						
						</ul>
					</div>
		  	</div>  
	  	</div>
	  </>
  );
}

export default SaleBar;