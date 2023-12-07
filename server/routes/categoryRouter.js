const express = require('express');
const router = express.Router();
const categoryMiddleWare = require('../controllers/category.controller');

router.post("/post", categoryMiddleWare.post);
router.get("/post", categoryMiddleWare.getPost);
router.get("/:post_id", categoryMiddleWare.getDetailPage);
router.patch("/:post_id", categoryMiddleWare.patchPost);



module.exports = router;