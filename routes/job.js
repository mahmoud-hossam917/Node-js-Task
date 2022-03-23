const express = require('express')
const router = express.Router()
const job_controller = require('../controllers/jobController.js')

router.post('/create',job_controller.createJob);


module.exports = router;