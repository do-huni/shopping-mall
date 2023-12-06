import axios from "axios";
import {useEffect, useState} from "react";
import "../Account.css";
import { useNavigate } from 'react-router-dom';
import Card from '../Card';
import { BsCreditCard, BsCart, BsTruck, BsBox2 } from "react-icons/bs";

function MyPage() {
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
  return (
	<div className = "container">
		<div className = "cardWrapper">
			<Card title = "상품 등록" content = "담아놓은 상품을 조회합니다." icon = {()=><BsCart/>} link = "/salepage/post"/>
			<Card title = "상품 조회" content = "결제 단계인 상품을 조회합니다." icon = {()=><BsCreditCard/>}/>
			<Card title = "배송중" content = "배송 중인 상품을 조회합니다." icon = {()=><BsTruck/>}/>
			<Card title = "배송완료" content = "배송 완료된 상품을 조회합니다." icon = {()=><BsBox2/>}/>
		</div>
		<div>
			<div>최근 본 상품</div>
		</div>
		<div>
			<div>문의 및 고객센터</div>
		</div>
	</div>		  
  );
}

export default MyPage;
