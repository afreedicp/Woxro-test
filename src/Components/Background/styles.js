import styled from '@emotion/styled';
import nature from '../../Assets/nature1.jpg';
export const BackgroundStyles = styled.div`
  .imageContainer {
    margin-top: 2px;
    background-image: url(${nature});
    height: 550px;
    width: 100%;
    display: flex;

    font-size: 16px;
    align-items: center;
    background-size: cover;
    .headingDiv {
      height: 100%;
      font-family: 'Poppins', sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2 {
        font-size: 5rem;
        font-weight: bold;
        color: #fff;
        word-break: break-word;
        max-width: 80%;
      }
    }
    p {
      color: #fff;
      font-family: 'Poppins', sans-serif;
      word-break: break-word;
      max-width: 800px;
      font-size: 1.2rem;
    }
  }
`;
