const axios = require('axios');

// Define the controller function
const informations = async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json',
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
// const populationGrowthInformations = async (req, res) => {
//   const options = {
//     method: 'GET',
//     url: 'https://api.worldbank.org/v2/countriesbd/indicators/SP.POP.TOTL?format=json',
//   };

//   try {
//     const response = await axios.request(options);
//     const airQualityData = response.data;
//     res.json(airQualityData); // Send the data as a JSON response
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching air quality data' });
//   }
// };
// Export the controller function
module.exports = {
  informations,
  // populationGrowthInformations
};
