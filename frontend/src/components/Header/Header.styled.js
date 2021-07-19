import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.elements};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  padding: 0 5rem;
  box-shadow: 0px 5px 20px 0px ${({ theme }) => theme.shadow};
  position: relative;
  z-index: 1;

  h1 {
    font-size: 1.75em;
  }

  .modeToggle {
    font-size: 1.125em;
    font-weight: 600;
    display: inline-flex;
    line-height: 125%;
    all: unset;
    cursor: pointer;
  }

  .modeToggle::before {
    font-family: 'Material Icons';
    font-size: 125%;
    vertical-align: -25%;
    content: 'dark_mode';
    margin-right: 0.5rem;
  }

  @media (max-width: 700px) {
    padding: 0 1rem;

    h1 {
      font-size: 1.125em;
    }

    .modeToggle {
      font-size: 0.875em;
    }
  }
`;
