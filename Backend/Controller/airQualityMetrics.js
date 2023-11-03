const axios = require('axios');

// Define the controller function
const informations = async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://air-quality.p.rapidapi.com/history/airquality',
    params: {
      lon: '-78.638',
      lat: '35.779',
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
