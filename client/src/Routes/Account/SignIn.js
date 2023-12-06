import axios from "axios";
import {useEffect, useState} from "react";
import "./Account.css";
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();		
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  
  const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value);
  }	
  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value);
  }		  
  const onLoginHandler = (event) => {
      event.preventDefault();	
	  const signInData = {
		  email: Email,
		  pw: Password
	  };
	  axios({
		  method: 'post',
		  url: 'https://shopping-mall-be.run.goorm.site/signin',
		  data: signInData				  
	  }).then((res)=>{	
		  console.log(res);
		  if(!res.data.okay){
			  alert(res.data.message);
		  } else{
			  localStorage.setItem('jwtAccess', res.data.accessToken);
			  localStorage.setItem('jwtRefresh', res.data.refreshToken);
			  navigate('/');
		  }
	  }).catch((res)=>{
		  console.log(res);
		  alert("네트워크 오류 발생. 서버가 닫혀있거나 응답을 받을 수 없는 상황입니다.");
	  });
  }
  return (
    <div id = "signWrapper">		  	  
    <div className = {"InputFormWrapper"}>		  
		  <div id = "signUpLetter">로그인</div>
		  <label htmlFor = "emailInput">이메일</label>
		  <input type = "text" id = "emailInput" onChange = {onEmailHandler} value = {Email}/>
		  <label htmlFor = "pwInput">비밀번호</label>		
		  <input type = "password" id = "pwInput" onChange = {onPasswordHandler} value = {Password}/>	
		  <div className ={"button-4 mg-40"}>
			<div className={"eff-4"}></div>
			<div className = {"text-4"} onClick = {onLoginHandler}>로그인</div>
		  </div>			
    </div>
	</div>
  );
}

export default SignIn;
