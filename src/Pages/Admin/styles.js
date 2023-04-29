import styled from '@emotion/styled';
export const AdminPageStyles = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .adminDetailsDiv {
    background: #fff;
    margin-top: 2px;
    height: 100%;
    width: 100%;
    display: flex;
    font-size: 16px;
    padding: 50px;
  }
  .techImage {
    width: 1000px;
    height: 700px;
  }
  .techdiv {
    position: relative;
    .coverup {
      position: absolute;
      bottom: 180px;
      right: 25%;
      background: #fff;
      width: 400px;
      height: 50px;
    }
  }
  .detailsCard {
    padding: 40px 30px;
    border-radius: 16px;
    width: 50%;
    height: 60%;
    background: #b8dffb;
  }
  .headcontainer {
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    border: 3px solid #fff;
    border-radius: 14px;
    margin-top: 50px;
    padding: 0 20px;
    height: 50px;
    color: #000;
    width: 100%;

    i {
      cursor: pointer;
    }
    span {
      max-width: 50%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .inputLabel {
    position: absolute;
    top: -30px;
    font-weight: 600;
  }
  .inputContainer {
    outline: none;
    background: none;
  }
  .transform:hover {
    transform: skew(15deg, 10deg);
  }
  .warningDiv {
    margin: 20px;
  }
  .navigateButton {
    position: fixed;
    bottom: 5%;
    right: 10%;
    color: #1a3e58;
    width: 150px;
    height: 50px;
    background: none;
    border-radius: 8px;
    border: 3px solid #b8dffb;
    cursor: pointer;
    z-index: 4;
    :hover {
      background: #b9cad7c9;
    }
  }
  @media screen and (max-width: 880px) {
    .adminDetailsDiv {
      display: block !important;
    }
    .techImage {
      display: none;
    }
    .coverup {
      display: none;
    }
    .detailsCard {
      width: 100%;
    }
  }
`;
