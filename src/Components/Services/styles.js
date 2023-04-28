import styled from '@emotion/styled';
export const ServiceStyles = styled.div`
  h2 {
    padding: 1.5rem;
    color: #000;
  }
  .serviceContainer {
    font-size: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    width: 100%;

    h2 {
      max-width: 800px;
      text-align: center;
      word-break: break-word;
    }
  }
`;
