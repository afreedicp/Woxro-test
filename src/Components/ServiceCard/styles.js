import styled from '@emotion/styled';
export const ServiceCardStyles = styled.div`
  .cardDiv {
    border: thin var(--grey);
    border-radius: 8px;
    padding: 0 10px;
    width: auto;
    height: 15rem;
    margin: 0.5rem;
    padding: 1rem;
    transition: 0.3s;
    cursor: pointer;
    :hover {
      transform: scale(0.9);
    }
  }
  p {
    font-size: 14px;
  }
  h5 {
    margin-top: 10px;
    font-weight: bold;
    color: #000;
  }
`;
