import axios from "axios";
import {useEffect} from "react";
import './HeaderFooter.css';
import { BsList, BsSearch, BsFillPersonFill, BsCartFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();	
  return (
	  <>
	  
	  <header id = "header">
		  <div id = "headerLogo" onClick = {()=>{navigate("/")}}>
			  orang
		  </div>		  
	  <div id = "headerContentsWrapper">
		  <div>
			  <BsList/>
			  <BsSearch/>
		  </div>
		  <nav id = "headerNav">
			  <ul>
				  <li>
					  신상품
				  </li>
				  <li>
					  베스트
				  </li>
				  <li>
					  아우터
				  </li>
				  <li>
					  상의
				  </li>
				  <li>
					  하의
				  </li>
			  </ul>
		  </nav>
		  <div>
			  <span className = {"dropdownWrapper"}>				  
			  	  <BsFillPersonFill id = "userSVG"/>
				  <div className = {"dropdownContent"}>
					  <div onClick = {()=>{navigate("/mypage")}}>마이페이지</div>					  
					  <div onClick = {()=>{navigate("/adminpage")}}>어드민 페이지</div>	
					  <div onClick = {()=>{navigate("/salepage")}}>상품 관리 페이지</div>					  					  					  
					  <div onClick = {()=>{navigate("/signup")}}>회원가입</div>
					  <div onClick = {()=>{navigate("/signin")}}>로그인</div>
					  <div onClick = {()=>{navigate("/signout")}}>로그아웃</div>					  
					  
  			  	  </div>
			   </span>			  
			  <BsCartFill/>
		  </div>		  
	  </div>
	  </header>
	  </>
  );
}

export default Header;
