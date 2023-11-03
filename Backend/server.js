const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
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
