import './App.css';
import axios from "axios";
import {useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./Routes/HeaderFooter/Header.js";
import Footer from "./Routes/HeaderFooter/Footer.js";
import SignUp from "./Routes/Account/SignUp.js";
import SignIn from "./Routes/Account/SignIn.js";
import MyPage from "./Routes/Account/MyPage.js";
import AdminPage from "./Routes/Account/AdminPage.js";
import SalePage from "./Routes/Account/SalePage.js";
import Product from "./Routes/Account/salepage/Product.js";
import Delivery from "./Routes/Account/salepage/Delivery.js";
import Brand from "./Routes/Account/salepage/Brand.js";
import Review from "./Routes/Account/salepage/Review.js";
import ProductPost from "./Routes/Account/salepage/ProductPost.js";

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
			  <Route path = "/adminpage" element = {
					  <AdminPage/>
				  }/>
			  <Route path = "/salepage" element = {
					  <SalePage/>					  
				}>
					  <Route path = "product" element = {
						  <Product/>							  
							  }/>			
					  <Route path = "post" element = {
						  <ProductPost/>							  
							  }/>					  
					  <Route path = "review" element = {
						  <Review/>							  
							  }/>	
					  <Route path = "brand" element = {
						  <Brand/>							  
							  }/>	
					  <Route path = "Delivery" element = {
						  <Delivery/>							  
							  }/>					  
			  </Route>
		  </Routes>
	  	  <Footer/>		  	  			  
		  </div>			  
	  </BrowserRouter>
	  </>
  );
}

export default App;
