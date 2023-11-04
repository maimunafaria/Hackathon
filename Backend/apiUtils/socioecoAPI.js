const axios = require('axios');

async function getSocioData({countries}) {
    console.log(countries)
     const apiKey = 'AoQ6ZbD2MMl0tirgw8JHMg==1zoOAz54zbHOJyoR';
   //  console.log(country)
    const secondApiOptions = {
          method: 'GET',
          url: `https://api.api-ninjas.com/v1/country?name=${country}`,
          headers: {
            'X-Api-Key': apiKey
          }
        }
        try {
           const countryResponse = await axios.request(secondApiOptions);
           console.log(countryResponse.data)
           return countryResponse
        }catch (error) {
            console.error(`Error while saving the data for ${country} to the database:`, error);
          }
}

module.exports = {
    getSocioData
}