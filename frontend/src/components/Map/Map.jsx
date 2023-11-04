// import React, { useEffect, useState } from 'react'
// import { ReactBingmaps } from 'react-bingmaps';
// import useStyles from './styles.js'

// // {  setCoordinates,  setBounds,  coordinates}
// const Map = ( {  setCoordinates,  setBounds,  coordinates}) => {
//   const classes = useStyles()
//   const [latitude, setLatitude] = useState(null)
//   const [longitude, setLongitude] = useState(null)

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
//       setLatitude(latitude)
//       setLongitude(longitude)
//       setCoordinates({ lat: latitude, lng: longitude })
//       setBounds({ ne: { lat: latitude + 0.5, lng: longitude + 0.5 }, sw: { lat: latitude - 0.5, lng: longitude - 0.5 } })
//       console.log(latitude, longitude)
//     })
//   }, [])

//   return (
//     <div className={classes.mapContainer}>
//       <ReactBingmaps
//         bingmapKey= "ApEOgxgDlaHfNKwVkVJ_Y0mW4lfIHGmalZe2dsx9Td5g8F8eIoNNHo5l2oYAx5gX"
//         center={[latitude, longitude]}
//         zoom={10}
//         pushPins={[
//           {
//             "location":[latitude, longitude], 
//             "option":{ color: 'red' }, 
//             "addHandler": {"type" : "click", callback: function(){console.log('pushpin one clicked');}}
//           }
//         ]}
//         infoboxes={[
//           {
//             "location":[latitude, longitude], 
//             "option":{ title: 'Boston Museum of Fine Arts', description: 'Museum of fine arts description' }, 
//             "addHandler": {"type" : "click", callback: function(){console.log('Infobox one clicked');}}
//           }
//         ]}

//         polyline={{
//           "location":[[42.361145, -71.057083], [42.858279, -70.930498]],
//           "option":{ strokeColor: 'blue', strokeThickness: 2 }
//         }}

//         polygon={{
//           "location":[[42.361145, -71.057083], [42.858279, -70.930498], [42.858279, -70.730498]],
//           "option":{ fillColor: 'rgba(255,0,0,0.5)', strokeThickness: 2 }
//         }}

//         mapTypeId={"road"}

//         navigationBarMode={"compact"}

//         supportedMapTypes={[ "road", "canvasDark", "grayscale", "canvasLight" ]}
//         heading={180}
//         mapOptions={{
//           uriConstructor:  "https://tiles.aqicn.org/tiles/usepa-aqi//{zoom}/"+{latitude}+"/" + {longitude} + ".png?token=aec8733a81ab3dc5075bc11868cddc0029255d3e",  
//           maxZoom: 15,
//           minZoom: 2
//         }}
//         tilesource={{
//           uriConstructor:  "https://tiles.aqicn.org/tiles/usepa-aqi//{zoom}/"+{latitude}+"/" + {longitude} + ".png?token=aec8733a81ab3dc5075bc11868cddc0029255d3e",  
//           maxZoom: 15,
//           minZoom: 2,
//           bounds: [ [ 0.5, 113.837 ], [ 22.634, 113.837 ] ],
//         }}
//         tileLayerOptions={{
          
//         }}

//         width={'100%'}
//         height={'100%'}
//       />
//     </div>
//   )
// }

// export default Map

import React, { useEffect, useState } from 'react';

const Map = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setLatitude(latitude);
      setLongitude(longitude);
    }, (error) => {
      console.error('Error getting geolocation:', error);
    });
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      const initBingMap = () => {
        const map = new window.Microsoft.Maps.Map(document.getElementById('map'), {
          center: new window.Microsoft.Maps.Location(latitude, longitude),
          zoom: 11,
        });

        const options = {
          uriConstructor:
            `https://tiles.aqicn.org/tiles/usepa-aqi/{zoom}/{x}/{y}.png?token=ApEOgxgDlaHfNKwVkVJ_Y0mW4lfIHGmalZe2dsx9Td5g8F8eIoNNHo5l2oYAx5gX`,
          minZoom: 1,
          maxZoom: 15,
        };

        const waqiTileSource = new window.Microsoft.Maps.TileSource(options);
        const waqiTileLayer = new window.Microsoft.Maps.TileLayer({ mercator: waqiTileSource });

        map.layers.insert(waqiTileLayer);
      };

      if (window.Microsoft) {
        initBingMap();
      } else {
        // Load the Bing Maps script if it's not already loaded
        const script = document.createElement('script');
        script.src = 'https://www.bing.com/api/maps/mapcontrol?callback=initBingMap';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
    }
  }, [latitude, longitude]);

  return (
    <div style={{ height: '100vh' }}>
      <div id="map" style={{ position: 'relative', height: '100%' }} />
    </div>
  );
};

export default Map;
