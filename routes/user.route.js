const express = require('express');
const userControllers = require('../controllers/user.controller');

const router = express.Router()

router
.post('/signup',)

router
.post('/login', )

router
.get('/me', userControllers.getMe)

module.exports = router;