import React from 'react'
import { CssBaseline, Grid } from '@mui/material'
import { Header, Home } from './components'

const App = () => {

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={2} style={{ borderRight: '1px solid #000000' }}>
          1
        </Grid>
        <Grid item xs={12} md={10}>
          <Router>
            <Route exact path="/" component={Home} />
            <Route path="/map" component={Map} />
          </Router>
        </Grid>
      </Grid>
    </>
  )
}

export default App