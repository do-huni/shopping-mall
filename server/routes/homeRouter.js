const express = require('express');
const router = express.Router();
const homeMiddleWare = require('../controllers/home.controller');

router.post("/signup", homeMiddleWare.signUp);
router.get("/signin", (req, res) => {
    res.send({test : "hi"});
});
router.get("/refresh", (req, res) => {
    res.send({test : "hi"});
});

module.exports = router;