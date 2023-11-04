const { Location } = require('../Model/locationModel');
const { getAqiData } = require('../apiUtils/aqiAPI');

async function getallCities(req, res) {
  const data = await Location.find({});
  const cityNames = data.map(item => item.city_name);
  console.log(cityNames);
  const aqiDataRes = [];
  try{
    for(let i = 0; i < cityNames.length; i++){
      let tempcity = cityNames[i].toLowerCase();
      const aqiData = await getAqiData(tempcity);
      if(aqiData== undefined|| aqiData== null|| aqiData.aqi=='-'||aqiData.aqi==0){
        continue;
      }
      aqiDataRes.push(aqiData);
    }
    res.json(aqiDataRes);
  }catch(error){
    console.log(error);
  }
}
//sort get all cities by co2 emission and return in descending order with emission
async function getallCitiesByCo2(req, res) {
  const { cityName } = req.params;
  let tempcity = cityName.toLowerCase();
  console.log(tempcity)
  try{
  const aqiData = await getAqiData(tempcity);
  res.json(aqiData);
  }catch{
    console.log(error);
  }
}
async function getCityByName(req, res) {
  const { cityName } = req.params;
  console.log(cityName)
  const data = await Location.find({ city_name: cityName });
  console.log(data);
  return res.status(200).json(data);
}


module.exports = {
    getallCities,
    getallCitiesByCo2,
    getCityByName
};
