import styled from '@emotion/styled';
export const LandingPageStyles = styled.div`
  .pageContainer {
    margin: 0 auto;
    background: #fff;
    width: 1180px;
    height: 100vh;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: #a6a6a8;
      border-radius: 25px;
    }
  }
  .topHeadContainer {
    color: #fff;
    padding: 0 20px;
    height: 40px;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logoContainer {
    padding: 16px;
    height: 5rem;
    .appLogo {
      width: 12rem;
    }
  }
  h6 {
    color: #585858;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    line-height: 1.43;
  }
  .contactConatiner {
    width: 100%;
  }
`;
