import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 12vh;
  padding: 0 5rem;
  box-shadow: 0px 5px 20px 0px hsl(0, 0%, 90%);
  position: relative;
  z-index: 1;

  h1 {
    font-size: 1.75em;
  }

  .modeToggle {
    font-size: 1.125em;
    font-weight: 600;
    display: inline-flex;
  }

  .modeToggle::before {
    font-family: 'Material Icons';
    font-size: 1.3em;
    content: 'dark_mode';
    margin-right: 0.5rem;
  }

  @media (max-width: 700px) {
    padding: 0 1rem;
    align-items: flex-start;
    padding-top: 1rem;
    min-height: 8vh;

    h1 {
      font-size: 1.125em;
      margin-top: 0;
    }

    .modeToggle {
      font-size: 0.875em;
    }
  }
`;
