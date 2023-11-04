const { Location } = require('../Model/locationModel');
const { getAqiData } = require('../apiUtils/socioecoAPI');

async function getallCountries(req, res) {
  const data = await Location.find({});
  const countryNames = data.map(item => item.country_name);
  const aqiDataRes = [];
  try{
    for(let i = 0; i < countryNames.length; i++){
      // let tempcity = countryNames[i].toLowerCase();
      // console.log(tempcity)
      const aqiData = await getAqiData(countryNames[i]);
 //   console.log(aqiData)
      if(aqiData== undefined|| aqiData== null|| aqiData.aqi=='-'||aqiData.aqi==0){
        continue;
      }
      aqiDataRes.push(aqiData);
    }
    console.log("done")
    return aqiDataRes
  }catch(error){
    console.log(error);
  }
}

//sort get all cities by co2 emission and return in descending order with emission
// async function getallCitiesByCo2(req, res) {
//   const cities = await Location.find().sort({co2Emission: -1});
//   console.log(cities);
//   res.json(cities);
// }

module.exports = {
    getallCountries,
    // getallCitiesByCo2
};