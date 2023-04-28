import React from 'react';
import Background from '../../Components/Background';
import Contacts from '../../Components/Contacts';
import Navbar from '../../Components/Navbar';
import Services from '../../Components/Services';
import { LandingPageStyles } from './styles';
const index = () => {
  return (
    <LandingPageStyles>
      <div className='pageContainer'>
        <div className='topHeadContainer'>
          <span>Hirindsdg software developer</span>
          <div>
            <span>234234234234</span>
            <span>india, maha rashtra</span>
          </div>
        </div>
        <div className='logoContainer'>
          <img
            className='appLogo'
            src={'https://woxro.com/public/assets/png/woxrologo.png'}
            alt='logo'
          />
        </div>
        <div>
          <Navbar />
        </div>
        <Background />
        <div className='d-flex justify-content-center p-5'>
          <h6>services we deliver</h6>
        </div>
        <Services />
        <div className='contactConatiner d-flex align-items-center'>
          <Contacts />
        </div>
      </div>
    </LandingPageStyles>
  );
};

export default index;
