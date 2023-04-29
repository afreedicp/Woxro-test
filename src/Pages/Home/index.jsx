import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Background from '../../Components/Background';
import Contacts from '../../Components/Contacts';
import Navbar from '../../Components/Navbar';
import Services from '../../Components/Services';
import { selectDetails } from '../../Store/detailsSlice';
import { LandingPageStyles } from './styles';
const Home = () => {
  const navigate = useNavigate();

  const details = useSelector(selectDetails);
  return (
    <LandingPageStyles>
      <div className='pageContainer'>
        <div className='topHeadContainer'>
          <span>
            <b>Now Hiring</b> : Looking for a job in Full Stack Development?{' '}
          </span>
          <div>
            <span className='me-4'>{details.number ? details.number : ''}</span>
            <span>{details.location ? details.location : ''}</span>
          </div>
        </div>
        <div className='logoContainer'>
          <img
            className='appLogo'
            src={'https://woxro.com/public/assets/png/woxrologo.png'}
            alt='logo'
          />
          <div className='mobileNavbarContainer'>
            <i class='fa-solid fa-bars fa-xl'></i>
          </div>
        </div>
        <div className='navbarContainer'>
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
        <button
          className='navigateButton'
          type='button'
          onClick={() => navigate('/admin')}
        >
          Admin
        </button>
      </div>
    </LandingPageStyles>
  );
};

export default Home;
