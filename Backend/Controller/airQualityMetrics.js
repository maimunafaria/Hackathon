const axios = require('axios');

// Define the controller function
const informations = async (req, res) => {
  const { bounds, lat, lon } = req.query;
  url = 'https://api.waqi.info/v2/map/bounds?latlng=39.379436,116.091230,40.235643,116.784382&networks=all&token=demo'

  const options = {
    method: 'GET',
    url: 'https://air-quality.p.rapidapi.com/history/airquality',
    params: {
      lon: lat,
      lat: lon,
    },
    headers: {
      'X-RapidAPI-Key': 'b211884dd3mshbc0fe449b4e2d29p1d9af8jsn54626dbd1398',
      'X-RapidAPI-Host': 'air-quality.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    const airQualityData = response.data;
    res.json(airQualityData); // Send the data as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching air quality data' });
  }
};

// Export the controller function
module.exports = {
  informations
};
