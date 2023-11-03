const axios = require('axios');
const { Location } = require('../Model/locationModel');

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
  // const apiKey = 'AoQ6ZbD2MMl0tirgw8JHMg==1zoOAz54zbHOJyoR';

  // const firstApiOptions = {
  //   method: 'GET',
  //   url: 'https://referential.p.rapidapi.com/v1/country',
  //   params: {
  //     limit: '300'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': 'b7383d18famshd62e8b78e486898p1a2e06jsn9ab7d8ca5872',
  //     'X-RapidAPI-Host': 'referential.p.rapidapi.com'
  //   }}

    try {

      //const response = await axios.request(firstApiOptions);
      const countries = response.data;

      for (const country of countries) {
        console.log(`Country Name: ${country.value}`);
        let country_name = Location.findOne({country_name: country.value});

        if(country_name){
        // const secondApiOptions = {
        //   method: 'GET',
        //   url: `https://api.api-ninjas.com/v1/country?name=${country.value}`,
        //   headers: {
        //     'X-Api-Key': apiKey
        //   }
        // }

          try {
            // Make the second API call for each country
           //const countryResponse = await axios.request(secondApiOptions);
            //console.log(`Response from the second API call for ${country.value}:`, countryResponse.data);
            let country_name = countryResponse.data[0].name;
            let city_name = countryResponse.data[0].capital;
            let co2_emissions = countryResponse.data[0].co2_emissions;
            let gdp = countryResponse.data[0].gdp;
            let gdp_growth = countryResponse.data[0].gdp_growth;
            let gdp_per_capita = countryResponse.data[0].gdp_per_capita;
            let population = countryResponse.data[0].population;
            let population_growth = countryResponse.data[0].pop_growth;
            let iso2 = countryResponse.data[0].iso2;
            const locationdata ={
              country_name,
              iso2,
              city_name,
              co2_emissions,
              gdp,
              gdp_growth,
              gdp_per_capita,
              population,
              population_growth
            };
            //console.log(locationdata);
            try {
              // Save the data to the database
              const location =await Location.create(locationdata);
              console.log(`Data saved to the database for ${country.value}`);
              console.log(location);
              // res.json(locationdata);
            } catch (error) {
              console.error(`Error while saving the data for ${country.value} to the database:`, error);
            }
          } catch (error) {
            console.error(`Error in the second API call for ${country.value}:`, error);
          }
        }
      }
    } catch (error) {
      console.error('Error in the first API call:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


module.exports = {
  getCityRanking,
};
