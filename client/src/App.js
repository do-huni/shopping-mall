import './App.css';
import axios from "axios";
import {useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./Routes/HeaderFooter/Header.js";
import Footer from "./Routes/HeaderFooter/Footer.js";
import SignUp from "./Routes/Account/SignUp.js";
import SignIn from "./Routes/Account/SignIn.js";
import MyPage from "./Routes/Account/MyPage.js";

import Main from "./Routes/Main/Main.js"

function App() {

	
  return (
	  <>
	  <BrowserRouter>
	  	  <Header/>		  
	  	  <div id = "contentWrapper">		  
		  <Routes>
			  <Route path = "/" element = {
					 <Main/> 
				  }/>
			  <Route path = "/signup" element = {
					 <SignUp/> 
				  }/>
			  <Route path = "/signin" element = {
					 <SignIn/> 
				  }/>			
			  <Route path = "/mypage" element = {
					 <MyPage/> 
				  }/>			 			  
		  </Routes>
	  	  <Footer/>		  	  			  
		  </div>			  
	  </BrowserRouter>
	  </>
  );
}

export default App;
