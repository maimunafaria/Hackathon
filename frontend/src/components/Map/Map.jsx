import React, { useEffect, useState } from 'react'
import { ReactBingmaps } from 'react-bingmaps';
import useStyles from './styles.js'

// {  setCoordinates,  setBounds,  coordinates}
const Map = (c) => {
  const classes = useStyles()
  const [map, setMap] = useState(null)
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [zoom, setZoom] = useState(14)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setLatitude(latitude)
      setLongitude(longitude)
      console.log(latitude, longitude)
    })
  }, [])

  return (
    <div className={classes.mapContainer}>
      <ReactBingmaps
        bingmapKey= "ApEOgxgDlaHfNKwVkVJ_Y0mW4lfIHGmalZe2dsx9Td5g8F8eIoNNHo5l2oYAx5gX"
        center={[latitude, longitude]}
        zoom={10}
        pushPins={[
          {
            "location":[42.361145, -71.057083], 
            "option":{ color: 'red' }, 
            "addHandler": {"type" : "click", callback: function(){console.log('pushpin one clicked');}}
          },
          {
            "location":[42.858279, -70.930498], 
            "option":{ color: 'red' }, 
            "addHandler": {"type" : "click", callback: function(){console.log('pushpin two clicked');}}
          }
        ]}
        infoboxes={[
          {
            "location":[42.361145, -71.057083], 
            "option":{ title: 'Boston Museum of Fine Arts', description: 'Museum of fine arts description' }, 
            "addHandler": {"type" : "click", callback: function(){console.log('Infobox one clicked');}}
          },
          {
            "location":[42.858279, -70.930498],
            "option":{ title: 'Salisbury Beach', description: 'Salisbury Beach description' },
            "addHandler": {"type" : "click", callback: function(){console.log('Infobox two clicked');}}
          }
        ]}

        polyline={{
          "location":[[42.361145, -71.057083], [42.858279, -70.930498]],
          "option":{ strokeColor: 'blue', strokeThickness: 2 }
        }}

        polygon={{
          "location":[[42.361145, -71.057083], [42.858279, -70.930498], [42.858279, -70.730498]],
          "option":{ fillColor: 'rgba(255,0,0,0.5)', strokeThickness: 2 }
        }}

        mapTypeId={"road"}

        navigationBarMode={"compact"}

        supportedMapTypes={[ "road", "canvasDark", "grayscale", "canvasLight" ]}
        heading={180}
        mapOptions={{
          uriConstructor:  "https://tiles.aqicn.org/tiles/usepa-aqi//{zoom}/"+{latitude}+"/" + {longitude} + ".png?token=aec8733a81ab3dc5075bc11868cddc0029255d3e",  
          maxZoom: 10,
          minZoom: 2
        }}
        tilesource={{
          uriConstructor:  "https://tiles.aqicn.org/tiles/usepa-aqi//{zoom}/"+{latitude}+"/" + {longitude} + ".png?token=aec8733a81ab3dc5075bc11868cddc0029255d3e",  
          maxZoom: 10,
          minZoom: 2,
          bounds: [ [ 0.5, 113.837 ], [ 22.634, 113.837 ] ],
        }}
        tileLayerOptions={{
          
        }}

        width={'100%'}
        height={'100%'}
      />
    </div>
  )
}

export default Map
