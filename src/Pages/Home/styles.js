import styled from '@emotion/styled';
export const LandingPageStyles = styled.div`
  .pageContainer {
    margin: 0 auto;
    background: #fff;
    width: 1180px;
    height: 100vh;
    overflow: auto;
    margin-bottom: 10px;
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
    font-weight: 600;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    line-height: 1.43;
  }
  .contactConatiner {
    width: 100%;
  }
  .navigateButton {
    position: fixed;
    bottom: 5%;
    right: 2%;
    color: #1a3e58;
    width: 80px;
    font-weight: 600;
    height: 50px;
    background: #3c3c3c8a;
    border-radius: 8px;
    border: 3px solid #b8dffb;
    cursor: pointer;
    z-index: 4;
    :hover {
      background: #b9cad7c9;
    }
  }
  @media screen and (max-width: 1200px) {
    .pageContainer {
      width: 100%;
    }
  }
  @media screen and (max-width: 880px) {
    .navbarContainer {
      display: none;
    }
    .topHeadContainer {
      display: none;
    }
  }
`;
