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
					  <div onClick = {()=>{navigate("/signup")}}>sign up</div>
					  <div onClick = {()=>{navigate("/signin")}}>sign in</div>
					  
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
