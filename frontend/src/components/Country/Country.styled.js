import styled from 'styled-components';

export const StyledCountry = styled.article`
  background: ${({ theme }) => theme.elements};
  border-radius: 5px;
  box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.shadow};
  max-width: 260px;

  .flag {
    width: 100%;
    height: 45%;
    object-fit: fill;
    border-radius: 5px 5px 0 0;
  }

  .textContent {
    padding: 0 1.5rem;
    margin-bottom: 3rem;
  }

  p {
    font-size: 0.875rem;
    margin: 0.5rem 0;
  }

  p span {
    font-weight: 800;
  }

  @media (max-width: 700px) {
    max-width: 100%;
  }
`;
