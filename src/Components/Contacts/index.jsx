import { ContactStyles } from './styles';

const Contacts = () => {
  return (
    <ContactStyles>
      <div className='contactDiv d-flex justify-content-between align-items-center'>
        <p className='conactHead'>
          We offer all kinds of IT services that ensure your success
        </p>
        <div className='buttonsContainer'>
          <button type='button'>
            <i className='fas fa-phone-alt me-1' />
            Contact us
          </button>
          <button type='button'>
            <i className='fas fa-comment me-1' />
            Let's Talk
          </button>
        </div>
      </div>
    </ContactStyles>
  );
};

export default Contacts;
