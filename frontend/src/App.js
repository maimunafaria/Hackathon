import React , {useState, useEffect} from 'react'
import { CssBaseline, Grid } from '@mui/material'
import { Search, Home, Map ,SEF,Navbar,CityDetails} from './components'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'
import './App.css';


const App = () => {
  const [eventData, setEventData] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)

  useEffect(() => {
    if (bounds) {
      console.log(bounds)
      console.log(coordinates)
    }
  }, [bounds])

  return (
    <>
      <CssBaseline />
      
      <Grid container spacing={0} style={{ width: '100%' }}>
        <Grid item xs={12} md={2.5} >
          <Navbar/>
        </Grid>
        <Grid item xs={12} md={9.5}>
        <Search />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map 
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
        />} />
        <Route path="/map" element={<Map />} />
        <Route path="/social-economic" element={<SEF />} />
        <Route path={`/specific-city-details/:cityName`} element={<CityDetails />} />
      </Routes>
        </Grid>
      </Grid>
    </>
  )
}

export default App