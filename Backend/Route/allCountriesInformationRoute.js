const express = require('express')
const router = express.Router()

const allCountryController = require('../Controller/allCountriesInformation')

router.get('/informations',  allCountryController.getCityRanking)

module.exports = router