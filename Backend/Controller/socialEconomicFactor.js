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


module.exports = {
    getallCountries,
};