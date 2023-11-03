import React from 'react';
import { Card, Typography, Divider } from 'antd';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const CityDetails = () => {
  // Dummy data for the city details
  const cityData = {
    name: 'City Name',
    countryName: 'Country Name',
    gdp: '100 billion USD',
    gdpPerCapita: '10,000 USD',
    gdpGrowth: '5%',
    totalPopulation: '1 million',
    populationGrowth: '2%',
    AQ: 45,
    PM: 10,
    PM10: 20,
    ozoneLevels: 30,
  };

  // Dummy data for the pie chart
  const pieChartData = {
    labels: ['N2O', 'O2', 'CO2'],
    datasets: [
      {
        data: [20, 30, 50], // Dummy values for N2O, O2, CO2
        backgroundColor: ['#D0312D', 'rgb(255, 250, 0)', '#3377FF'], // Colors for the segments
      },
    ],
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Card title={cityData.name}>
            <p><strong>Country Name:</strong> {cityData.countryName}</p>
            <p><strong>GDP:</strong> {cityData.gdp}</p>
            <p><strong>GDP per Capita:</strong> {cityData.gdpPerCapita}</p>
            <p><strong>GDP Growth:</strong> {cityData.gdpGrowth}</p>
            <p><strong>Total Population:</strong> {cityData.totalPopulation}</p>
            <p><strong>Population Growth:</strong> {cityData.populationGrowth}</p>
            <p><strong>Air Quality Metrics:</strong></p>
            <ul>
              <li><strong>AQ:</strong> {cityData.AQ}</li>
              <li><strong>PM:</strong> {cityData.PM}</li>
              <li><strong>PM10:</strong> {cityData.PM10}</li>
              <li><strong>Ozone Levels:</strong> {cityData.ozoneLevels}</li>
            </ul>
            <Divider />
          </Card>
        </div>
      </div>
      <div>
        <div style={{ maxWidth: '400px', maxHeight: '400px' }}>
          <Typography.Title level={5}>N2O, O2, CO2 Levels</Typography.Title>
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>
  );
};

export default CityDetails;
