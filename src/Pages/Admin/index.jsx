import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import techno from '../../Assets/tech.jpg';
import {
  selectDetails,
  updateHeading,
  updateLocation,
  updateNumber,
} from '../../Store/detailsSlice';
import { AdminPageStyles } from './styles';

import { useNavigate } from 'react-router-dom';
const AdminScreen = () => {
  const [editVal, setEditVal] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {}, [editVal]);
  const details = useSelector(selectDetails);
  console.log(details);
  const handleEdit = (item, title) => {
    setEditVal(title);
  };
  const updateHead = (val, title) => {
    if (title === 'heading') {
      dispatch(
        updateHeading({
          data: val,
          successCB: (data) => {
            console.log(data);
            setEditVal('');
          },
        })
      );
    } else if (title === 'number') {
      dispatch(
        updateNumber({
          data: val,
          successCB: (data) => {
            console.log(data);
            setEditVal('');
          },
        })
      );
    } else {
      dispatch(
        updateLocation({
          data: val,
          successCB: (data) => {
            console.log(data);
            setEditVal('');
          },
        })
      );
    }
  };
  return (
    <AdminPageStyles>
      <div className='adminDetailsDiv'>
        <button
          className='navigateButton'
          type='button'
          onClick={() => navigate('/')}
        >
          Back to home
        </button>
        <div className='detailsCard'>
          <>
            {editVal !== 'heading' ? (
              <div className={`headcontainer `}>
                <span className='inputLabel'>Heading</span>
                <span>
                  {details.heading ? details.heading : 'Not Specified'}{' '}
                </span>
                <i
                  className='fa-regular fa-pen-to-square'
                  onClick={() => handleEdit(details.heading, 'heading')}
                ></i>
              </div>
            ) : (
              editVal === 'heading' && (
                <div>
                  <input
                    ref={(inp) => {
                      inp?.focus();
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        updateHead(e.target.value, 'heading');
                      }
                    }}
                    className={`headcontainer  inputContainer`}
                    type='text'
                  />
                </div>
              )
            )}

            {editVal !== 'number' ? (
              <div className={`headcontainer `}>
                <span className='inputLabel'>Number</span>
                <span>
                  {details.number ? details.number : 'Not-specified'}{' '}
                </span>
                <i
                  className='fa-regular fa-pen-to-square'
                  onClick={() => handleEdit(details.number, 'number')}
                ></i>
              </div>
            ) : (
              editVal === 'number' && (
                <div>
                  <input
                    ref={(inp) => {
                      inp?.focus();
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        updateHead(e.target.value, 'number');
                      }
                    }}
                    className={`headcontainer  inputContainer`}
                    type='text'
                  />
                </div>
              )
            )}

            {editVal !== 'location' ? (
              <div className={`headcontainer `}>
                <span className='inputLabel'>Location</span>
                <span>
                  {details.location ? details.location : 'Not specified'}{' '}
                </span>
                <i
                  className='fa-regular fa-pen-to-square'
                  onClick={() => handleEdit(details.location, 'location')}
                ></i>
              </div>
            ) : (
              editVal === 'location' && (
                <div>
                  <input
                    ref={(inp) => {
                      inp?.focus();
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        updateHead(e.target.value, 'location');
                      }
                    }}
                    className={`headcontainer  inputContainer`}
                    type='text'
                  />
                </div>
              )
            )}
          </>
          <div className='warningDiv'>
            {editVal && 'Please press the enter key to edit'}
          </div>
        </div>
        <div className='techdiv d-flex justify-content-end w-100'>
          <img className='techImage' src={techno} alt='tech-logo' />
          <div className='coverup'></div>
        </div>
      </div>
    </AdminPageStyles>
  );
};

export default AdminScreen;
