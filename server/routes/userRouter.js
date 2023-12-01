const express = require('express');
const router = express.Router();
const userMiddleWare = require('../controllers/user.controller');

router.get("/", userMiddleWare.userinfo);
router.get("/refresh", userMiddleWare.refresh);


module.exports = router;