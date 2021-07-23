import styled from 'styled-components';

export const StyledBorderCountry = styled.button`
  all: unset;
  padding: 0.3rem 1rem;
  background: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.input};
  box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.shadow};
  border-radius: 5px;
  font-weight: 600;
  font-size: 0.875rem;
  position: relative;
`;
