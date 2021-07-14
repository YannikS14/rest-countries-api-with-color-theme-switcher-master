import styled from 'styled-components';

export const StyledCountry = styled.article`
  background-color: var(--dark-text-light-elements);
  border-radius: 5px;
  box-shadow: 0px 0px 10px 2px hsl(0, 0%, 90%);

  .flag {
    width: 100%;
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
`;
