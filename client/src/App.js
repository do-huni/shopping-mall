import './App.css';
import axios from "axios";
import {useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Routes/HeaderFooter/Header.js";
import Footer from "./Routes/HeaderFooter/Footer.js";
import SignUp from "./Routes/Account/SignUp.js";
import SignIn from "./Routes/Account/SignIn.js";

import Main from "./Routes/Main/Main.js"

function App() {
  const callApi = async () => {	  
    axios.get('https://shopping-mall-be.run.goorm.site/api')
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  };
	
  useEffect(() => {
    callApi();
  }, []);
	
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
		  </Routes>
	  	  <Footer/>		  	  			  
		  </div>			  
	  </BrowserRouter>
	  </>
  );
}

export default App;
