import styled from 'styled-components';

export const StyledButton = styled.button`
  all: unset;
  padding: 0.5rem 2rem 0.5rem 3.5rem;
  background: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.input};
  box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.shadow};
  border-radius: 5px;
  font-weight: 600;
  position: relative;

  ::before {
    font-family: 'Material Icons';
    font-size: 1.5em;
    content: 'arrow_right_alt';
    position: absolute;
    left: 1.25rem;
    transform: rotate(180deg);
  }
`;
