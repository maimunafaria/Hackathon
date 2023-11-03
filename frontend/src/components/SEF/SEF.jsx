
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const SEF = () => {
  const [data, setData] = useState(null);
  const [populationData, setPopulationData] = useState(null);
  useEffect(() => {
     const fetchData = async () => {
      try {
       const response = await axios.get('http://localhost:3000/SEF/socialInformations'); 
       setData(response.data);
       console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    // const fetchData1 = async () => {
    //   try {
    //    const response = await axios.get('http://localhost:3000/SEF/populationGrowth'); 
    //    setData(response.data);
    //    console.log(response.data)
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // fetchData1();
  }, []);

  return (
    // <div>
    //   {data ? (
   
    //     <p>{data}</p>
    //   ) : (
       
    //     <p>Loading data...</p>
    //   )}
    // </div>
    <p>social-economic</p>
  );
};

export default SEF;
