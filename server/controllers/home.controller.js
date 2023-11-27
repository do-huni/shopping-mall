const express = require('express');
const User = require('../models/user')



exports.signUp = async (req, res) => {
    const user = new User(req.body);	
	const response = await user.signUp();
	res.status(response.status)
	res.send(response);
}