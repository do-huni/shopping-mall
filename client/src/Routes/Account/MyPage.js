import axios from "axios";
import {useEffect, useState} from "react";
import "./Account.css";
import { useNavigate } from 'react-router-dom';

function MyPage() {
  const navigate = useNavigate();		
  useEffect(()=>{	  
	  const jwtAccess = localStorage.getItem('jwtAccess');
	  const jwtRefresh = localStorage.getItem('jwtRefresh');
	  if(!jwtAccess){
		  navigate('/login');		 
	  }
	  if(!jwtRefresh){
		  navigate('/login');
	  }
	  
	  axios.get('https://shopping-mall-be.run.goorm.site/user',
				{
		  headers: {
			  authorization: jwtAccess
		  }
	  }
	  ).then((res)=>{	
		  console.log(res);		  
	  }).catch((res)=>{
		  console.log(res);
	  });	  
  },[])
  const onLoginHandler = (event) => {
      event.preventDefault();	

  }
  return (
    <div id = "">	
		  마이페이지
    </div>
  );
}

export default MyPage;
