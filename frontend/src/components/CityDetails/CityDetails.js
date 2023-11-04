import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Typography, Divider } from 'antd';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { useParams } from 'react-router-dom';

const CityDetails = () => {
  const { cityName } = useParams();
  const [cityInfo, setCityInfo] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/cty/city/${cityName}`)
      .then((response) => {
        const cityData = response.data[0]
        setCityInfo(cityData);
        console.log(cityData)
      })
      .catch((error) => {
        console.error(error);
      });
    
  }, []);

  // Check if the cityInfo is available
  if (!cityInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Card title={cityInfo.city_name}>
            <p><strong>Country Name:</strong> {cityInfo.country_name}</p>
            <p><strong>GDP:</strong> {cityInfo.gdp}</p>
            <p><strong>GDP per Capita:</strong> {cityInfo.gdp_per_capita}</p>
            <p><strong>GDP Growth:</strong> {cityInfo.gdp_growth}</p>
            <p><strong>Total Population:</strong> {cityInfo.population}</p>
            <p><strong>Population Growth:</strong> {cityInfo.population_growth}</p>
            <p><strong>Air Quality Metrics:</strong></p>
            <ul>
              <li><strong>AQ:</strong> {cityInfo.AQ}</li>
              <li><strong>PM:</strong> {cityInfo.PM}</li>
              <li><strong>PM10:</strong> {cityInfo.PM10}</li>
              <li><strong>Ozone Levels:</strong> {cityInfo.ozoneLevels}</li>
            </ul>
            <Divider />
          </Card>
        </div>
      </div>
    </div>
  
  );
};

export default CityDetails;

