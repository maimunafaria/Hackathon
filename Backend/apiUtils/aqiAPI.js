const axios = require('axios');
// var city = 'delhi';


// const apiUrl = 'http://api.waqi.info/feed/' + city + '/?token=aec8733a81ab3dc5075bc11868cddc0029255d3e';

// axios.get(apiUrl)
//   .then((response) => {
//     const data = response.data;
//     console.log( data);
//     if (data.status === 'ok') {
//       const aqi = data.data.aqi;
//       const cityName = data.data.city.name;
//       const o3 = data.data.iaqi.o3;
//         if(o3 == undefined){
//             o3 = 0;
//         }else{
//             o3 = o3.v;
//         }
//       const pm10 = data.data.iaqi.pm10;
//         if(pm10 == undefined){
//             pm10 = 0;
//         }else{
//             pm10 = pm10.v;
//         }
//       const pm25 = data.data.iaqi.pm25.v;
//       const [latitude, longitude] = data.data.city.geo;

//       console.log('AQI:', aqi);
//       console.log('City Name:', cityName);
//         console.log('O3:', o3);
//         console.log('PM10:', pm10);
//         console.log('PM25:', pm25);
//       console.log('Latitude:', latitude);
//       console.log('Longitude:', longitude);
//     } else {
//       console.error('API request failed with status:', data.status);
//     }
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });


async function getAqiData(city) {
    const apiUrl = 'http://api.waqi.info/feed/' + city + '/?token=aec8733a81ab3dc5075bc11868cddc0029255d3e';
    const response = await axios.get(apiUrl);
    let aqi = 0;
    let cityName = '';
    let co = 0;
    let h = 0;
    let no2 = 0;
    let o3 = 0;
    let pm10 = 0;
    let pm25 = 0;
    let latitude = 0;
    let longitude = 0;

    const data = response.data;
    if (data.status === 'ok') {
        aqi = data.data.aqi;
        cityName = data.data.city.name;
        co = data.data.iaqi.co;
            if(co == undefined){
                co = 0;
            }else{
                co = co.v;
            }
        h = data.data.iaqi.h;
            if(h == undefined){
                h = 0;
            }else{
                h = h.v;
            }
        no2 = data.data.iaqi.no2;
            if(no2 == undefined){
                no2 = 0;
            }else{
                no2 = no2.v;
            }
        o3 = data.data.iaqi.o3;
            if(o3 == undefined){
                o3 = 0;
            }else{
                o3 = o3.v;
            }
        pm10 = data.data.iaqi.pm10;
            if(pm10 == undefined){
                pm10 = 0;
            }else{
                pm10 = pm10.v;
            }
        pm25 = data.data.iaqi.pm25;
            if(pm25 == undefined){
                pm25 = 0;
            }else{
                pm25 = pm25.v;
            }
        [latitude, longitude] = data.data.city.geo;
    
        const aqiData = {
            aqi,
            cityName,
            co,
            h,
            no2,
            o3,
            pm10,
            pm25,
            latitude,
            longitude
        }

        //console.log(aqiData);

        return aqiData;
    } else {
     //   console.error('API request failed with status:', data.status);
    }
}

module.exports = {
    getAqiData
}