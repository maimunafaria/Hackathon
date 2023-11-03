import React from 'react'
// import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import useStyles from './styles'
import { Link } from 'react-router-dom';
import Search from '../Search/Search';

const Header = () => {
  const classes = useStyles()
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          EnviroVista
        </Typography>
        <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Air Quality Metrics
        </Button>
        <Button color="inherit" component={Link} to="/social-economic">
          Social Economic Factors
        </Button>
        <Button color="inherit" component={Link} to="/map">
          Map
        </Button>
      </Toolbar>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          {/* <Autocomplete> */}
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div> */}
            <div className="mx-auto">
              <Search onSearchChange={handleOnSearchChange} />
            </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
