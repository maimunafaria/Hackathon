const express = require('express')
const router = express.Router()

const cityController = require('../Controller/cityController')

router.get('/cities',  cityController.getallCities)
router.get('/cities/co2/:cityName',  cityController.getallCitiesByCo2)
router.get('/city/:cityName', cityController.getCityByName)
module.exports = router