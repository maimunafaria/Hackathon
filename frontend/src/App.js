import React from 'react'
import { CssBaseline, Grid } from '@mui/material'
import { Header , Navbar } from './components'

const App = () => {
 
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={2} style={{ borderRight: '1px solid #000000' }}>
         <Navbar/>
        </Grid>
        <Grid item xs={12} md={10}>
          <h1>Content</h1>
        </Grid>
      </Grid>
    </>
  )
}

export default App