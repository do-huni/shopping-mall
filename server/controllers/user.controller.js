const express = require('express');
const User = require('../models/user')
require('dotenv').config();


exports.userinfo = async (req, res)=>{
  const user = new User(req.body);
  console.log(req.get('authorization'));
  // const response = await user.signIn();
  // res.status(response.status);
  // res.send({
  // okay: response.ifSuccess,
  // accessToken: response.accessToken,
  // refreshToken: response.refreshToken,
  // message: response.message
  // });
};