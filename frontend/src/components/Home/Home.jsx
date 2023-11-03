// import React from 'react'
// // import { Autocomplete } from '@react-google-maps/api'
// import { AppBar, Toolbar, Typography, InputBase, Box, Button } from '@mui/material'
// import SearchIcon from '@mui/icons-material/Search'
// import useStyles from './styles'

// const Home = () => {
//   const classes = useStyles()
//   return (
//  <p>HOME</p> 
//   )
// }

// export default Home
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
       const response = await axios.get('http://localhost:3000/cty/cities');
       setData(response.data);
       console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    // <div>
    //   {data ? (
   
    //     <p>{data}</p>
    //   ) : (
       
    //     <p>Loading data...</p>
    //   )}
    // </div>
    <p>home</p>
  );
};

export default Home;
