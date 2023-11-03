const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const AQMRoute = require('./Route/airQualityMetricsRoute')
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(cors());
app.use('/AQM', AQMRoute)