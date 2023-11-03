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
            "location":[latitude, longitude], 
            "option":{ color: 'red' }, 
            "addHandler": {"type" : "click", callback: function(){console.log('pushpin one clicked');}}
          }
        ]}
        infoboxes={[
          {
            "location":[latitude, longitude], 
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
          "location":[[latitude, longitude], [42.858279, -70.930498]],
          "option":{ strokeColor: 'blue', strokeThickness: 2 }
        }}

        polygon={{
          "location":[[latitude, longitude], [42.858279, -70.930498], [42.858279, -70.730498]],
          "option":{ fillColor: 'rgba(255,0,0,0.5)', strokeThickness: 2 }
        }}

        mapTypeId={"road"}

        navigationBarMode={"compact"}

        supportedMapTypes={[ "road", "canvasDark", "grayscale", "canvasLight" ]}
        heading={180}

        width={'100%'}
        height={'100%'}
      />
    </div>
  )
}

export default Map
