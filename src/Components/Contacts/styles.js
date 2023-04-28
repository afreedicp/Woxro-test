import styled from '@emotion/styled';
export const ContactStyles = styled.div`
  width: 100%;
  .contactDiv {
    height: 20rem;
    padding: 0 30px;
    background: #000;
    background-image: url(https://woxro.com/public/assets/png/woxroglobe.png);
    background-repeat: no-repeat;
  }
  .conactHead {
    max-width: 600px;
    font-size: 32px;
    word-break: break-word;
    font-weight: bold;
    color: #fff;
  }
  .buttonsContainer {
    display: flex;
    width: 30%;
    justify-content: space-between;

    button {
      font-weight: 600;
      width: 160px;
      color: #fff;
      height: 3.5rem;
      border-radius: 5px;
      background: none;
      border: 1px solid #fff;
    }
  }
`;
