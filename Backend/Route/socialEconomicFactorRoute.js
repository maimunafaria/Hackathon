const express = require('express')
const router = express.Router()

const SEFController = require('../Controller/socialEconomicFactor')
router.get('/socialInformations', SEFController.getallCountries)

module.exports = router