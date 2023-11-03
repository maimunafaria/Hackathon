import React from 'react'
// import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import useStyles from './styles'

const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          EnviroVista
        </Typography>
    
      <Toolbar sx={{ display: 'flex', flexDirection: 'row' }}>   
        <Button color="inherit">Air Quality Metrics</Button>
        <Button color="inherit">Social Economic Factors</Button>
        <Button color="inherit">Map</Button>
      </Toolbar>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          {/* <Autocomplete> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
