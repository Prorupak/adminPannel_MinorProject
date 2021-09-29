/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Card from '../../Components/Cards/Card';
import Navbar from '../../Components/Navbar/Navbar';
// import SideMenu from '../Components/SideMenu/SideMenu';
import SmallMenu from '../../Components/SmallMenu/SmallMenu';

const Dashboard = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Navbar heading="dashboard" />
        <SmallMenu />
      </div>
      <Card />
    </>
  );
};

export default Dashboard;
