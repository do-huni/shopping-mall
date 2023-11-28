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