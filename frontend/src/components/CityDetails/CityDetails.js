import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Typography, Divider } from 'antd';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { useParams } from 'react-router-dom';

const CityDetails = () => {
  const { cityName } = useParams();
  const [cityInfo, setCityInfo] = useState(null);
  const [cityInfo1, setCityInfo1] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/cty/city/${cityName}`)
      .then((response) => {
        const cityData = response.data[0];
        setCityInfo(cityData);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`http://localhost:3000/cty/cities/co2/${cityName}`)
      .then((response) => {
        const cityData1 = response.data;
        setCityInfo1(cityData1);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!cityInfo) {
    return <div>Loading...</div>;
  }

  const pieChartData = {
    labels: ['N2O', 'H', 'CO'],
    datasets: [
      {
        data: [cityInfo1.no2, cityInfo1.h, cityInfo1.co],
        backgroundColor: ['#D0312D', 'rgb(255, 250, 0)', '#3377FF'],
      },
    ],
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
        justifyContent: 'center',
      }}
    >
      <div>
        <Card title={cityInfo.city_name}>
          <p><strong>Country Name:</strong> {cityInfo.country_name}</p>
          <p><strong>GDP:</strong> {cityInfo.gdp}</p>
          <p><strong>GDP per Capita:</strong> {cityInfo.gdp_per_capita}</p>
          <p><strong>GDP Growth:</strong> {cityInfo.gdp_growth}</p>
          <p><strong>Total Population:</strong> {cityInfo.population}</p>
          <p><strong>Population Growth:</strong> {cityInfo.population_growth}</p>
          <p><strong>Air Quality Metrics:</strong></p>
          <ul>
            <li><strong>AQ:</strong> {cityInfo1.aqi}</li>
            <li><strong>PM 25:</strong> {cityInfo1.pm25}</li>
            <li><strong>Ozone Levels:</strong> {cityInfo1.o3}</li>
          </ul>
          <Divider />
        </Card>
      </div>
      <div style={{ maxWidth: '400px', maxHeight: '400px' }}>
        <Typography.Title level={5}>N2O, H, CO Levels</Typography.Title>
        <Pie data={pieChartData} />
      </div>
    </div>
  );
};

export default CityDetails;


