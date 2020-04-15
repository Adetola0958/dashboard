const express = require('express');
const router = express.Router();
//const multer = require('multer')
const DashController = require("../controller/dashController")

router.get('/dashboard', DashController.getDashboard)


module.exports = router;