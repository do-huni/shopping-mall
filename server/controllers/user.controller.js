const express = require('express');
const tokenManager = require('../models/tokenManager')
require('dotenv').config();

exports.refresh = async (req, res)=>{
	const tm = new tokenManager(req);	
	const response = await tm.refresh();
	console.log(response);
	res.status(response.status);
	res.send(response);	
};
exports.userinfo = async (req, res)=>{
	const tm = new tokenManager(req);	
	const response = await tm.verify();
	console.log(response);
	res.status(response.status);
	res.send(response);
};
