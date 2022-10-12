const express = require('express')
const jobControllers = require('../controllers/jobs.controllers')
const router = express.Router()

router
.route('/')
.get(jobControllers.getAllJobs)
.post(jobControllers.CreateAJob)

router
.route('/:id')
.get(jobControllers.getAJobPortal)
.patch(jobControllers.updateAJobPortal)
module.exports = router