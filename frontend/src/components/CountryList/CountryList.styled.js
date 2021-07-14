import styled from 'styled-components';

export const StyledCountryList = styled.section`
  margin: 5rem 5rem 0 5rem;
  display: grid;
  column-gap: 5rem;
  row-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  @media (max-width: 700px) {
    margin: 2.5rem 15vw 0 15vw;
    row-gap: 2.5rem;
  }
`;
