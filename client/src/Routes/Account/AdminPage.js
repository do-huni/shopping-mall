import axios from "axios";
import {useEffect, useState} from "react";
import "./Account.css";
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import RankComponent from './RankComponent';

function AdminPage() {
	const navigate = useNavigate();		
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userRank, setUserRank] = useState(0);
	const [userRankPoint, setUserRankPoint] = useState(0);
		
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
// 		  일반 계정에서 접근 시 접근 거부
		  if(!data.admin_priv){
			  alert("권한이 없는 계정입니다.");
			  navigate('/');
		  }
		  setUserName(data.name);
		  setUserEmail(data.email);
		  
	  }).catch((res)=>{
		  navigate('/signin')
	  });	  
  },[])
	
  const onLoginHandler = (event) => {
      event.preventDefault();	

  }
  return (
    <div id = "">	
	<div className = "container">
		<div className = "userWrapper">
			<div className = "userBold">{userName}<RankComponent rank = {userRank}/></div>
			<div className = "userNormal">{userEmail}</div>
		</div>
	</div>		  
    </div>
  );
}

export default AdminPage;
