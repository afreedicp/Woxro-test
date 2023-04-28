import styled from '@emotion/styled';
export const NavStyles = styled.div`
  .navbarContainer {
    width: 100%;
    background: #161a1e;
  }
  .navContent {
    padding: 0 30px;

    height: 2.8rem;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20px;
    button {
      cursor: pointer;
      border-radius: 12px;
      width: 120px;
      font-size: 18px;
      height: 100%;
      color: #fff;
      background: none;
      border: none;
      :hover {
        background: #000;
      }
    }
  }
`;
