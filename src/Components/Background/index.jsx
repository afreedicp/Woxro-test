import { BackgroundStyles } from './styles';
import { useSelector } from 'react-redux';
import { selectDetails } from '../../Store/detailsSlice';

const Background = () => {
  const details = useSelector(selectDetails);
  console.log(details);
  return (
    <BackgroundStyles>
      <div className='imageContainer'>
        <div className='headingDiv'>
          <h2>{details.heading ? details.heading : 'Welcome'}</h2>
          <p>
            Global Web Designing Company That Provides Full-cycle Software
            Development Services, E-commerce & Mobile App Development Services.
          </p>
        </div>
      </div>
    </BackgroundStyles>
  );
};

export default Background;
