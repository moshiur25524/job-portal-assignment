const express = require('express')
const jobControllers = require('../controllers/jobs.controllers')
const router = express.Router()

router
.route('/')
.get(jobControllers.getAllJobs)

module.exports = router