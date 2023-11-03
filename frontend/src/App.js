import React , {useState, useEffect} from 'react'
import { CssBaseline, Grid } from '@mui/material'
import { Header, Home, Map } from './components'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'


const App = () => {
  const [eventData, setEventData] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)

  useEffect(() => {
    if (bounds) {
      console.log(bounds)
    }
  }, [bounds])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={2} style={{ borderRight: '1px solid #000000' }}>
          1
        </Grid>
        <Grid item xs={12} md={10}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map 
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
        />} />
      </Routes>
        </Grid>
      </Grid>
    </>
  )
}

export default App