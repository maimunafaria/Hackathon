const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;
const cors = require('cors');
const { ConnectDB} = require('./config/db')
ConnectDB();

const AQMRoute = require('./Route/airQualityMetricsRoute')
const SEFRoute = require('./Route/socialEconomicFactorRoute')
const allRoute = require('./Route/allCountriesInformationRoute')
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(cors());
app.use('/AQM', AQMRoute)
app.use('/SEF', SEFRoute)
app.use('/all', allRoute)
