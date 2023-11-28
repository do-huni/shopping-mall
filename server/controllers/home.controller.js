const express = require('express');
const User = require('../models/user')
require('dotenv').config();



exports.signUp = async (req, res) => {
    const user = new User(req.body);	
	const response = await user.signUp();
	res.status(response.status)
	res.header("Access-Control-Allow-Origin", process.env.FE_PATH);
	res.send(response);
}

exports.signIn = async (req, res)=>{
  const user = new User(req.body);
  const response = await user.signIn();
  res.status(response.status);
  res.send({
	  okay: response.ifSuccess,
	  data: {
		  accessToken: response.accessToken,
		  responseToken: response.refreshToken
	  },
	  message: response.message
  });
};