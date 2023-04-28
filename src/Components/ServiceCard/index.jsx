import { ServiceCardStyles } from './styles';
import { useNavigate } from 'react-router-dom';
const ServiceCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <ServiceCardStyles>
      <div className='cardDiv' style={{ background: data.color }}>
        <img src={data.logo} alt='logo' />
        <h5>{data.Head}</h5>
        <p>{data.details}</p>
      </div>
    </ServiceCardStyles>
  );
};

export default ServiceCard;
