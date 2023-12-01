const express = require('express');
const router = express.Router();
const homeMiddleWare = require('../controllers/home.controller');

router.post("/signup", homeMiddleWare.signUp);
router.post("/signin", homeMiddleWare.signIn);



module.exports = router;