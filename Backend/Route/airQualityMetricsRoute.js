const express = require('express')
const router = express.Router()

const AQMController = require('../Controller/airQualityMetrics')

router.get('/informations', AQMController.informations)

module.exports = router