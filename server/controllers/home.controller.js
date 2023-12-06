const express = require('express');
const User = require('../models/user');
const Product = require('../models/product');

require('dotenv').config();



exports.signUp = async (req, res) => {
    const user = new User(req.body);	
	const response = await user.signUp();
	res.header("Access-Control-Allow-Origin", process.env.FE_PATH);
	res.status(response.status)
	res.send(response);
};
exports.createCategory = async (req, res) => {
	try{
		const product = new Product(req);
		const response = await product.createCategory();
		res.status(response.status);
		res.send(response.message);	
	} catch(err) {
		console.log("err");
		res.status(404);
		res.send({
			message: "오류 발생"
		});
	}
}
exports.category = async (req, res) => {
	try{
		const product = new Product(req);		
		const response = await product.getCategories();				
		res.status(response.status);
		res.send(response.data);
	} catch(err) {
		console.log(err);
		res.status(400);
		res.send({
			message: "알 수 없는 오류가 발생했습니다."
		})
	}	
};

exports.signIn = async (req, res)=>{
  const user = new User(req.body);
  const response = await user.signIn();
  res.status(response.status);
  res.send({
	  okay: response.ifSuccess,
	  accessToken: response.accessToken,
	  refreshToken: response.refreshToken,
	  message: response.message
  });
};