import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Card, Typography, Divider } from 'antd';

const Home = () => {
  const [data, setData] = useState(null);

  const citiesData = [
    {
      name: 'New York',
      rank: 1,
      population: '8.4 million',
      country: 'United States',
      AQ:49
    },
    {
      name: 'London',
      rank: 2,
      population: '8.9 million',
      country: 'United Kingdom',
      AQ:205
    },
    {
      name: 'Tokyo',
      rank: 3,
      population: '13.9 million',
      country: 'Japan',
      AQ:100
    },
    {
      name: 'Tokyo',
      rank: 3,
      population: '13.9 million',
      country: 'Japan',
      AQ:300
    },
    {
      name: 'Tokyo',
      rank: 3,
      population: '13.9 million',
      country: 'Japan',
      AQ:130
    },
    {
      name: 'Tokyo',
      rank: 3,
      population: '13.9 million',
      country: 'Japan',
      AQ: 199
    },
    // Add more city data here
  ];
  const CityCard = ({ name, rank, population, country, AQ }) => {
    // Determine the background color based on the AQ value
    let backgroundColor;
    let titleColor = 'white';

    if (AQ >= 0 && AQ <= 50) {
      backgroundColor = 'rgb(0, 190, 80)'; // Green
    } else if (AQ >= 51 && AQ <= 100) {
      backgroundColor = 'rgb(255, 200, 0)'; // Yellow
    } else if (AQ >= 101 && AQ <= 150) {
      backgroundColor = 'rgb(255, 145, 0)'; // Light Orange
    } else if (AQ >= 151 && AQ <= 200) {
      backgroundColor = '#D0312D'; // Light Red
    } else if (AQ >= 201 && AQ <= 300) {
      backgroundColor = 'rgb(180, 80, 180)'; // Light Purple
    } else {
      backgroundColor = '#800000';
      titleColor = 'white'; // Red for values 301 and above
    }
  
    const cardStyle = {
      marginBottom: 16,
      marginLeft: 10,
      border: '1px solid black', // Set the border style
    };
  
    const titleStyle = {
      backgroundColor,
      color: titleColor
    };
  
    return (
      <Card
        title={`Rank ${rank}: ${name}`}
        style={cardStyle}
        headStyle={titleStyle} // Set the background color for the title
      >
        <p><strong>City Name:</strong> {name}</p>
        <p><strong>Population:</strong> {population}</p>
        <p><strong>Country:</strong> {country}</p>
        <p><strong>Air Quality:</strong> {AQ}</p>
      </Card>
    );
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
       const response = await axios.get('http://localhost:3000/all/informations'); 
       setData(response.data);
       console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const cardsInARow = 5;

  return (
    <div>
      <h2 style={{ marginLeft: '1.5%' }}>Top ten most polluted Cities</h2>

      {Array.from({ length: Math.ceil(citiesData.length / cardsInARow) }).map((_, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {citiesData.slice(rowIndex * cardsInARow, (rowIndex + 1) * cardsInARow).map((city, index) => (
            <CityCard
              key={index}
              name={city.name}
              rank={city.rank}
              population={city.population}
              country={city.country}
              AQ={city.AQ}
            />
          ))}
        </div>
      ))}
    
      <h2 style={{ marginLeft: '1.5%' }}>Top ten most cleanest Cities</h2>
    
      {Array.from({ length: Math.ceil(citiesData.length / cardsInARow) }).map((_, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {citiesData.slice(rowIndex * cardsInARow, (rowIndex + 1) * cardsInARow).map((city, index) => (
            <CityCard
              key={index}
              name={city.name}
              rank={city.rank}
              population={city.population}
              country={city.country}
            />
          ))}
        </div>
      ))}
    </div>
    
    
  );
};

export default Home;
