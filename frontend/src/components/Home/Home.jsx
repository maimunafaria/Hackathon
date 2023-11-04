import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Card,Button, Row, Col } from 'antd';

const Home = () => {
  const [data, setData] = useState(null);
  const [sortedDesdata, setSortedDesdata] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const CityCard = ({ name, number,  AQ }) => {
   
    let backgroundColor;
    let titleColor = 'white';

    if (AQ >= 0 && AQ <= 50) {
      backgroundColor = 'rgb(0, 190, 80)'; 
    } else if (AQ >= 51 && AQ <= 100) {
      backgroundColor = 'rgb(255, 200, 0)'; 
    } else if (AQ >= 101 && AQ <= 150) {
      backgroundColor = 'rgb(255, 145, 0)'; 
    } else if (AQ >= 151 && AQ <= 200) {
      backgroundColor = '#D0312D'; 
    } else if (AQ >= 201 && AQ <= 300) {
      backgroundColor = 'rgb(180, 80, 180)'; 
    } else {
      backgroundColor = '#800000';
      titleColor = 'white'; 
    }
  
    const cardStyle = {
      marginBottom: 16,
      marginLeft: 10,
      border: '1px solid black', 
    };
  
    const titleStyle = {
      backgroundColor,
      color: titleColor
    };
  
    return (
      <Card
      title={`Rank ${number}: ${name}`}
        style={cardStyle}
        headStyle={titleStyle} 
      >
        <p><strong>City Name:</strong> {name}</p>
      
        <p><strong>AQI:</strong> {AQ}</p>
      </Card>
    );
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cty/cities');
        if (response.data) {
          
          const uniqueCityNames = new Set();
  
        
          const sortedData = response.data
            .filter(city => {
              if (!uniqueCityNames.has(city.cityName)) {
                uniqueCityNames.add(city.cityName);
                return true;
              }
              return false;
            })
            .sort((a, b) => a.aqi - b.aqi);
  
          setData(sortedData);
           setSortedDesdata([...sortedData].reverse());
          console.log(sortedData);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  

  const cardsInARow = showAll ? data.length : 10;
  return (
    <div>
    <h2 style={{ marginLeft: '1.5%' }}>Top ten most polluted Cities</h2>  
    {sortedDesdata && (
        <Row gutter={[16, 16]}>
          {Array.from({ length: cardsInARow }).map((_, index) => (
            <Col key={index} span={12}>
              <CityCard
              number={index + 1}
                name={sortedDesdata[index].cityName}
                AQ={sortedDesdata[index].aqi}
              />
            </Col>
          ))}
        </Row>
      )}
      {sortedDesdata && !showAll && (
        <Button onClick={() => setShowAll(true)}>See More</Button>
      )}
    <h2 style={{ marginLeft: '1.5%' }}>Top ten most cleanest Cities</h2>
      {data && (
        <Row gutter={[16, 16]}>
          {Array.from({ length: cardsInARow }).map((_, index) => (
            <Col key={index} span={12}>
              <CityCard
              number={index + 1}
                name={data[index].cityName}
                AQ={data[index].aqi}
              />
            </Col>
          ))}
        </Row>
      )}
      {data && !showAll && (
        <Button onClick={() => setShowAll(true)}>See More</Button>
      )}
    

    </div>
    
    
  );
};

export default Home;
