import React from 'react';
import './Dashboard.css';
import MainContainer from '../components/Dashboard/MainContainer';
import Menu from '../components/Dashboard/Menu.js';
import ParticlesComponent from '../components/Particles.js';

function Dashboard() {
  return (
    <div className='App1'>
        <Menu/>
        <MainContainer/>
        <ParticlesComponent/>
    </div>
  )
}

export default Dashboard