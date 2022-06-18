const express = require('express');

const userController = require('../controllers/userC');

const router = express.Router();

router.get('/getusers', userController.getReqAll);
router.post('/addnewuser',userController.postReq)

