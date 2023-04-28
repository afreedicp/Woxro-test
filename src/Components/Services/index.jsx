import React from 'react';
import ServiceCard from '../ServiceCard';
import { ServiceStyles } from './styles';
import { services } from '../../utils/utils';
const Services = () => {
  return (
    <ServiceStyles>
      <h2>
        Preparing for your success, we provide truly prominent IT solutions.
      </h2>
      <div className='serviceContainer d-grid '>
        {services.map((item) => (
          <ServiceCard data={item} />
        ))}
      </div>
    </ServiceStyles>
  );
};

export default Services;
