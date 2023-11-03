const { Location } = require('../Model/locationModel');

async function getallCities(req, res) {
  const cities = await Location.find();
  console.log(cities);
  res.json(cities);
}

//sort get all cities by co2 emission and return in descending order with emission
async function getallCitiesByCo2(req, res) {
  const cities = await Location.find().sort({co2Emission: -1});
  console.log(cities);
  res.json(cities);
}

module.exports = {
    getallCities,
    getallCitiesByCo2
};