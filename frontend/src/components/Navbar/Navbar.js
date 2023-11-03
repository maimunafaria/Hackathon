import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography ,Avatar} from 'antd';
import { Link } from 'react-router-dom';
import { CloudOutlined, GlobalOutlined, DollarCircleOutlined ,MenuOutlined,EnvironmentOutlined } from '@ant-design/icons';
import icon from '../../assets/environVista.png'
import './Navbar.css'
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const navContainerStyle = {
    backgroundColor: '#001529',
    height:'100%',
  //  marginTop: '-12%'
  };
  return (
    <div className="nav-container" style={navContainerStyle}>
     <div className="logo-container">
  <div className="logo-content">
  <Avatar src={icon} size="large"  />
    <Typography.Title level={2} className="logo dark-title" theme="dark">
      <Link to="/">EnviroVista</Link>
    </Typography.Title>
  </div>
  
</div>
   
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<CloudOutlined />}>
            <Link to="/">Air Quality </Link>
          </Menu.Item>
          <Menu.Item icon={< DollarCircleOutlined/>}>
            <Link to="/social-economic">Socio Economic Factors</Link>
          </Menu.Item>
          <Menu.Item icon={<EnvironmentOutlined/>}>
            <Link to="/map">Map</Link>
          </Menu.Item>
          
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
