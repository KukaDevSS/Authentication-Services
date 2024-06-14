const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth_controller');

router.post('/user/sign_up', authController.signUp);
router.post('/user/sign_in', authController.signIn);


module.exports = router;