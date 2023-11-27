import axios from "axios";
import {useEffect, useState} from "react";
import "./Account.css";
import InputForm from './InputForm.js';

function SignUp() {
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [Phone, setPhone] = useState("");
	const [Address, setAddress] = useState("");
    const [AddressDetail, setAddressDetail] = useState("");
	
    const [EmailMessage, setEmailMessage] = useState("xxxx@yyyy.com 형식으로 입력해주세요!");
    const [NameMessage, setNameMessage] = useState("10자리 이내로 입력해주세요!");
    const [PasswordMessage, setPasswordMessage] = useState("8자리 이상 영문자, 숫자, 특수문자 조합");
    const [ConfirmPasswordMessage, setConfirmPasswordMessage] = useState("");
    const [PhoneMessage, setPhoneMessage] = useState("010-xxxx-yyyy");
	const [AddressMessage, setAddressMessage] = useState("");
    const [AddressDetailMessage, setAddressDetailMessage] = useState("동, 호수 등 기재");
	
    const [EmailCheck, setEmailCheck] = useState(false);
    const [NameCheck, setNameCheck] = useState(false);
    const [PasswordCheck, setPasswordCheck] = useState(false);
    const [ConfirmPasswordCheck, setConfirmPasswordCheck] = useState(false);
    const [PhoneCheck, setPhoneCheck] = useState(false);
	const [AddressCheck, setAddressCheck] = useState(true);
    const [AddressDetailCheck, setAddressDetailCheck] = useState(true);	
													   
    const onEmailHandler = (event) => {
		const regexp = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if(!regexp.test(event.currentTarget.value)){
			setEmailMessage("xxxx@yyyy.com 형식으로 입력해주세요!")
			setEmailCheck(false);
		} else{
			setEmailMessage("올바른 형식이에요!")
			setEmailCheck(true);			
		}
        setEmail(event.currentTarget.value);
    }
    const onNameHandler = (event) => {
		if(event.currentTarget.value.length> 10 || event.currentTarget.value.length < 1){
			setNameMessage("10자리 이내로 입력해주세요!")
			setNameCheck(false);
		} else{
			setNameMessage("올바른 형식이에요!")
			setNameCheck(true);			
		}		
        setName(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
		const regexp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
		if(!regexp.test(event.currentTarget.value)){		
			setPasswordMessage("8자리 이상 영문자, 숫자, 특수문자 조합")
			setPasswordCheck(false);
		} else{
			setPasswordMessage("올바른 형식이에요!")
			setPasswordCheck(true);			
		}			
		if(event.currentTarget.value != ConfirmPassword){
			setConfirmPasswordCheck(false);
			setConfirmPasswordMessage("비밀번호가 일치하지 않습니다!")
		} else{
			setConfirmPasswordCheck(true);
			setConfirmPasswordMessage("비밀번호가 일치합니다!")
		}			
        setPassword(event.currentTarget.value);
	
    }
    const onConfirmPasswordHandler = (event) => {
	
        setConfirmPassword(event.currentTarget.value);
		if(Password != event.currentTarget.value){
			setConfirmPasswordCheck(false);
			setConfirmPasswordMessage("비밀번호가 일치하지 않습니다!")
		} else{
			setConfirmPasswordCheck(true);
			setConfirmPasswordMessage("비밀번호가 일치합니다!")
		}			
    }
    const onPhoneHandler = (event) => {
		const regexp = /^\d{3}-\d{3,4}-\d{4}$/;
		if(!regexp.test(event.currentTarget.value)){
			setPhoneMessage("010-xxxx-yyyy 형식으로 기재해주세요!")
			setPhoneCheck(false);
		} else{
			setPhoneMessage("올바른 형식이에요!")
			setPhoneCheck(true);			
		}		
        setPhone(event.currentTarget.value);
    }
    const onAddressHandler = (event) => {
        setAddress(event.currentTarget.value);
    }	
    const onAddressDetailHandler = (event) => {
        setAddressDetail(event.currentTarget.value);
    }	
    const onSubmitHandler = (event) => {
        event.preventDefault();
		if(Password.length < 8 || Password.length > 16)
        if(Password !== ConfirmPassword){
            return alert('비밀번호와 비밀번호 확인이 같지 않습니다.')
        }
		let signUpData = {
			name: Name,
			email: Email,
			pw: Password,
			address_lv1: Address,
			address_lv2: AddressDetail,
			phone: Phone			
		}
		console.log(signUpData);
		axios({
		  method: 'post',
		  url: 'https://shopping-mall-be.run.goorm.site/signup',
		  data: signUpData		  
		}).then((res)=>{
			console.log(res);			
		}).catch(console.error);		
	}	

  return (
    <div id = "signWrapper">		  
		  <div id = "signUpLetter">회원가입</div>
		  <form id = "signForm">			  
			  <InputForm type = "email" name = "이메일" message = {EmailMessage} val = {Email} handler = {onEmailHandler} check = {EmailCheck}/>
			  <InputForm type = "password" name = "비밀번호" message = {PasswordMessage} val = {Password} handler = {onPasswordHandler} check = {PasswordCheck}/>
			  <InputForm type = "password" name = "비밀번호 확인" message = {ConfirmPasswordMessage} val = {ConfirmPassword} handler = {onConfirmPasswordHandler} check =  {ConfirmPasswordCheck}/>
			  <InputForm type = "text" name = "닉네임" message = {NameMessage} val = {Name} handler = {onNameHandler} check = {NameCheck}/>
			  <InputForm type = "text" name = "전화번호" message = {PhoneMessage} val = {Phone} handler = {onPhoneHandler} check = {PhoneCheck}/>
			  <InputForm type = "text" name = "주소" message = {AddressMessage} val = {Address} handler = {onAddressHandler} check = {AddressCheck}/>
			  <InputForm type = "text" name = "상세주소" message = {AddressDetailMessage} val = {AddressDetail} handler = {onAddressDetailHandler} check = {AddressDetailCheck}/>			 
			  <div className ={"button-4 mg-40"}>
				<div className={"eff-4"}></div>
				<div className = {"text-4"} onClick = {onSubmitHandler}>회원가입 완료</div>
			  </div>			  
		  </form>
		  
    </div>
  );
}

export default SignUp;
