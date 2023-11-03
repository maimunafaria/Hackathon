const express = require('express')
const router = express.Router()

const cityController = require('../Controller/cityController')

router.get('/cities',  cityController.getallCities)
router.get('/cities/co2',  cityController.getallCitiesByCo2)

module.exports = router