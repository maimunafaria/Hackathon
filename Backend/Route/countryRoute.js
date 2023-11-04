const express = require('express')
const router = express.Router()

const getAllCountries = require('../Controller/countryContrller')

router.get('/countries', getAllCountries.getAllCountries)

module.exports = router