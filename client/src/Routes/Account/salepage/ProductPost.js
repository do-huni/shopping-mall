import axios from "axios";
import {useEffect, useState} from "react";
import "../Account.css";
import { useNavigate } from 'react-router-dom';
import Card from '../Card';
import { BsCreditCard, BsCart, BsTruck, BsBox2 } from "react-icons/bs";
import {InputGroup, Form, Button} from 'react-bootstrap';

function ProductPost() {
	const navigate = useNavigate();		
  useEffect(()=>{	  
	  const jwtAccess = localStorage.getItem('jwtAccess');
	  const jwtRefresh = localStorage.getItem('jwtRefresh');
	  if(!jwtAccess){
		  navigate('/signin');		 
	  }
	  if(!jwtRefresh){
		  navigate('/signin');
	  }	  
	  axios.get('https://shopping-mall-be.run.goorm.site/user',
				{
		  headers: {
			  authorization: jwtAccess
		  }
	  }
	  ).then((res)=>{	
		  const data = res.data;	  
	  }).catch((res)=>{
		  navigate('/signin')
	  });	  
  },[])
	
  return (
<div className = "container">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup></div>		  
  );
}

export default ProductPost;
