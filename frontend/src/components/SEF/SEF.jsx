import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Table } from 'antd';

const SEF = () => {
   // const [data, setData] = useState(null);
  // const [populationData, setPopulationData] = useState(null);
  // useEffect(() => {
  //    const fetchData = async () => {
  //     try {
  //      const response = await axios.get('http://localhost:3000/SEF/socialInformations'); 
  //      setData(response.data);
  //      console.log(response.data)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  //   // const fetchData1 = async () => {
  //   //   try {
  //   //    const response = await axios.get('http://localhost:3000/SEF/populationGrowth'); 
  //   //    setData(response.data);
  //   //    console.log(response.data)
  //   //   } catch (error) {
  //   //     console.error(error);
  //   //   }
  //   // };

  //   // fetchData1();
  // }, []);
  const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Population',
      dataIndex: 'population',
      key: 'population',
    },
    {
      title: 'GDP',
      dataIndex: 'gdp',
      key: 'gdp',
    },
    {
      title: 'GDP Per Capita',
      dataIndex: 'gdppercapita',
      key: 'gdppercapita',
    },
    {
      title: 'GDP Growth',
      dataIndex: 'gdpgrowth',
      key: 'gdpgrowth',
    },
    {
      title: 'Population Growth',
      dataIndex: 'populationgrowth',
      key: 'populationgrowth',
    },
   
    
  ];
  const data = [
    {
      key: '1',
      name: 'New York',
      rank: 1,
      population: '8.4 million',
      country: 'United States',
    },
    {
      key: '2',
      name: 'London',
      rank: 2,
      population: '8.9 million',
      country: 'United Kingdom',
    },
    {
      key: '3',
      name: 'Tokyo',
      rank: 3,
      population: '13.9 million',
      country: 'Japan',
    },
    {
      key: '1',
      name: 'New York',
      rank: 1,
      population: '8.4 million',
      country: 'United States',
    },
    {
      key: '2',
      name: 'London',
      rank: 2,
      population: '8.9 million',
      country: 'United Kingdom',
    },
    {
      key: '3',
      name: 'Tokyo',
      rank: 3,
      population: '13.9 million',
      country: 'Japan',
    },
    {
      key: '1',
      name: 'New York',
      rank: 1,
      population: '8.4 million',
      country: 'United States',
    },
    {
      key: '2',
      name: 'London',
      rank: 2,
      population: '8.9 million',
      country: 'United Kingdom',
    },
    {
      key: '3',
      name: 'Tokyo',
      rank: 3,
      population: '13.9 million',
      country: 'Japan',
    },
    {
      key: '1',
      name: 'New York',
      rank: 1,
      population: '8.4 million',
      country: 'United States',
    },
    {
      key: '2',
      name: 'London',
      rank: 2,
      population: '8.9 million',
      country: 'United Kingdom',
    },
    {
      key: '3',
      name: 'Tokyo',
      rank: 3,
      population: '13.9 million',
      country: 'Japan',
    },
    {
      key: '1',
      name: 'New York',
      rank: 1,
      population: '8.4 million',
      country: 'United States',
    },
    {
      key: '2',
      name: 'London',
      rank: 2,
      population: '8.9 million',
      country: 'United Kingdom',
    },
    {
      key: '3',
      name: 'Tokyo',
      rank: 3,
      population: '13.9 million',
      country: 'Japan',
    },
    {
      key: '1',
      name: 'New York',
      rank: 1,
      population: '8.4 million',
      country: 'United States',
    },
    {
      key: '2',
      name: 'London',
      rank: 2,
      population: '8.9 million',
      country: 'United Kingdom',
    },
    {
      key: '3',
      name: 'Tokyo',
      rank: 3,
      population: '13.9 million',
      country: 'Japan',
    },
    {
      key: '1',
      name: 'New York',
      rank: 1,
      population: '8.4 million',
      country: 'United States',
    },
    {
      key: '2',
      name: 'London',
      rank: 2,
      population: '8.9 million',
      country: 'United Kingdom',
    },
    {
      key: '3',
      name: 'Tokyo',
      rank: 3,
      population: '13.9 million',
      country: 'Japan',
    },
    {
      key: '1',
      name: 'New York',
      rank: 1,
      population: '8.4 million',
      country: 'United States',
    },
    {
      key: '2',
      name: 'London',
      rank: 2,
      population: '8.9 million',
      country: 'United Kingdom',
    },
    {
      key: '3',
      name: 'Tokyo',
      rank: 3,
      population: '13.9 million',
      country: 'Japan',
    },
    {
      key: '1',
      name: 'New York',
      rank: 1,
      population: '8.4 million',
      country: 'United States',
    },
    {
      key: '2',
      name: 'London',
      rank: 2,
      population: '8.9 million',
      country: 'United Kingdom',
    },
    {
      key: '3',
      name: 'Tokyo',
      rank: 3,
      population: '13.9 million',
      country: 'Japan',
    },
    {
      key: '1',
      name: 'New York',
      rank: 1,
      population: '8.4 million',
      country: 'United States',
    },
    {
      key: '2',
      name: 'London',
      rank: 2,
      population: '8.9 million',
      country: 'United Kingdom',
    },
    {
      key: '3',
      name: 'Tokyo',
      rank: 3,
      population: '13.9 million',
      country: 'Japan',
    },
    {
      key: '1',
      name: 'New York',
      rank: 1,
      population: '8.4 million',
      country: 'United States',
    },
    {
      key: '2',
      name: 'London',
      rank: 2,
      population: '8.9 million',
      country: 'United Kingdom',
    },
    {
      key: '3',
      name: 'Tokyo',
      rank: 3,
      population: '13.9 million',
      country: 'Japan',
    },
    {
      key: '1',
      name: 'New York',
      rank: 1,
      population: '8.4 million',
      country: 'United States',
    },
    {
      key: '2',
      name: 'London',
      rank: 2,
      population: '8.9 million',
      country: 'United Kingdom',
    },
    {
      key: '3',
      name: 'Tokyo',
      rank: 3,
      population: '13.9 million',
      country: 'Japan',
    },
    // Add more city data here
  ]
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10, // Number of rows per page
  });

  const handleChange = (page, pageSize) => {
    // Update the current page and page size when the user interacts with the pagination
    setPagination({ current: page, pageSize: pageSize });
  };

  const getCurrentPageData = () => {
    // Calculate the start and end indices of the current page's data
    const startIndex = (pagination.current - 1) * pagination.pageSize;
    const endIndex = startIndex + pagination.pageSize;
    
    // Get the data for the current page
    return data.slice(startIndex, endIndex);
  };

  // Get the data for the current page
  const currentData = getCurrentPageData();

  return (
    <Table
      columns={columns}
      dataSource={currentData}
      pagination={{
        current: pagination.current,
        pageSize: pagination.pageSize,
        total: data.length, // Total number of rows
        showSizeChanger: true, // Allow the user to change the page size
        showQuickJumper: true, // Allow the user to jump to a specific page
        onChange: handleChange, // Handle page changes
        onShowSizeChange: handleChange, // Handle page size changes
      }}
    />
  );
};

export default SEF;