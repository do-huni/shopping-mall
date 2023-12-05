import axios from "axios";
import {useEffect, useState} from "react";
import "./Account.css";
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import RankComponent from './RankComponent';
import RankBar from './RankBar';
import SaleBar from './SaleBar';
function SalePage() {
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
		  if(!data.sales_priv){
			  alert("권한이 없는 계정입니다.");
			  navigate('/');
		  }
		  setUserName(data.name);
		  setUserEmail(data.email);
		  setUserRank(data.rank);
		  setUserRankPoint(data.rank_point);
		  
	  }).catch((res)=>{
		  navigate('/signin')
	  });	  
  },[])
	
  const onLoginHandler = (event) => {
      event.preventDefault();	

  }
  const sideBar = [
	  { title: "상품 관리", icon: "bi-bag" },
	  { title: "브랜드 페이지", icon : "bi-shop" },
	  { title: "배송 관리", icon : "bi-truck" },
	  { title: "리뷰 관리", icon : "bi-chat" },
	  
  ]
  return (
	<>
    <div id = "saleWrapper">		  
	<SaleBar items = {sideBar} title = "브랜드 관리"/>	  	  		  
	<div className = "container">		  
		<div className = "userWrapper">
			<div className = "userBold">{userName}<RankComponent rank = {userRank}/></div>
			<div className = "userNormal">{userEmail}</div>
		</div>
		<RankBar rank = {userRank} rankPoint = {userRankPoint} />
    </div>
	</div>
	</>
  );
}

export default SalePage;