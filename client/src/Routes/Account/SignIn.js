import axios from "axios";
import {useEffect, useState} from "react";
import "./Account.css";
function SignIn() {
	
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
		  method: 'get',
		  url: 'https://shopping-mall-be.run.goorm.site/signup',
		  data: signInData				  
	  }).then((res)=>{
		  
	  }).catch((res)=>{
		  
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
