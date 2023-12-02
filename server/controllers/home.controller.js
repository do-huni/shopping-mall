const express = require('express');
const User = require('../models/user')
require('dotenv').config();



exports.signUp = async (req, res) => {
    const user = new User(req.body);	
	const response = await user.signUp();
	res.header("Access-Control-Allow-Origin", process.env.FE_PATH);
	res.status(response.status)
	res.send(response);
}

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