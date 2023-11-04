import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Table } from 'antd';

const SEF = () => {
   const [data, setData] = useState(null);
  useEffect(() => {
     const fetchData = async () => {
      try { 
       const response = await axios.get('http://localhost:3000/cnt/countries'); 
       setData(response.data);
       console.log(response)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const columns = [{
    title: 'Country',
    dataIndex: 'country_name',
    key: 'country_name',
  },
    {
      title: 'Capital',
      dataIndex: 'city_name',
      key: 'city_name',
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
      dataIndex: 'gdp_per_capita',
      key: 'gdp_per_capita',
    },
    {
      title: 'GDP Growth',
      dataIndex: 'gdp_growth',
      key: 'gdp_growth',
    },
    {
      title: 'Population Growth',
      dataIndex: 'population_growth',
      key: 'population_growth',
    },
   
    
  ];
 
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10, 
  });

  const handleChange = (page, pageSize) => {
    
    setPagination({ current: page, pageSize: pageSize });
  };

  // const getCurrentPageData = () => {

  //   const startIndex = (pagination.current - 1) * pagination.pageSize;
  //   const endIndex = startIndex + pagination.pageSize;
    
   
  //   return data.slice(startIndex, endIndex);
  // };


  // const currentData = getCurrentPageData();

  return (
    <Table
      columns={columns}
      dataSource={data}
     // dataSource={currentData}
      // pagination={{
      //   current: pagination.current,
      //   pageSize: pagination.pageSize,
      //   total: data.length, // Total number of rows
      //   showSizeChanger: true, // Allow the user to change the page size
      //   showQuickJumper: true, // Allow the user to jump to a specific page
      //   onChange: handleChange, // Handle page changes
      //   onShowSizeChange: handleChange, // Handle page size changes
      // }}
    />
  );
};

export default SEF;