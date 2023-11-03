const axios = require('axios');

// const city = 'london'
//   const options = {
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/airquality?city=' + city,
//   headers: {
//     'X-Api-Key': apiKey
//   },
//   };
 
//   try {
//     const response = await axios.request(options);
//     res.json(response.data);
//     // response.data.forEach(country => {
//     //   console.log(`${country.value}`);
//     // });
//   } catch (error) {
//     console.error(error);
//   }

// const axios = require('axios');

const getCityRanking = async (req, res) => {
  const apiKey = 'AoQ6ZbD2MMl0tirgw8JHMg==1zoOAz54zbHOJyoR';

  const firstApiOptions = {
    method: 'GET',
    url: 'https://referential.p.rapidapi.com/v1/country',
    params: {
      limit: '300'
    },
    headers: {
      'X-RapidAPI-Key': 'b7383d18famshd62e8b78e486898p1a2e06jsn9ab7d8ca5872',
      'X-RapidAPI-Host': 'referential.p.rapidapi.com'
    }}

    try {

      const response = await axios.request(firstApiOptions);
      const countries = response.data;

      for (const country of countries) {
        console.log(`Country Name: ${country.value}`);

        const secondApiOptions = {
          method: 'GET',
          url: `https://api.api-ninjas.com/v1/country?name=${country.value}`,
          headers: {
            'X-Api-Key': apiKey
          }
        }

          try {
            // Make the second API call for each country
            const countryResponse = await axios.request(secondApiOptions);
            console.log(`Response from the second API call for ${country.value}:`, countryResponse.data);
          } catch (error) {
            console.error(`Error in the second API call for ${country.value}:`, error);
          }
        
        res.json(countries);
      }
    } catch (error) {
      console.error('Error in the first API call:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


// Call the function to initiate the process


module.exports = {
  getCityRanking,
};
