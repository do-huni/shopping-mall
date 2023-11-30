const express = require('express');
const router = express.Router();
const userMiddleWare = require('../controllers/user.controller');

router.get("/", userMiddleWare.userinfo);


module.exports = router;