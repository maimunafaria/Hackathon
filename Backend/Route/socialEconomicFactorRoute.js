const express = require('express')
const router = express.Router()

const SEFController = require('../Controller/socialEconomicFactor')

router.get('/socialInformations', SEFController.informations)
//  router.get('/populationGrowth', SEFController.informations)
module.exports = router