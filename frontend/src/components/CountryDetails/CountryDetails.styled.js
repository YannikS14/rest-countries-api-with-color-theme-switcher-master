import styled from 'styled-components';

export const StyledCountryDetails = styled.article`
  margin-top: 5rem;

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  span {
    font-weight: 600;
  }

  .country-data-wrapper {
    display: flex;
    gap: 10%;
  }

  .country-data-wrapper img,
  .country-data {
    flex: 1 1 auto;
  }

  .country-data-wrapper img {
    object-fit: contain;
    max-width: 50%;
  }

  .country-data {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  .country-base-data-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  .border-countries {
    margin-top: 5rem;
    display: flex;
    align-items: center;
  }

  .border-countries span {
    margin-right: 0.5rem;
    white-space: nowrap;
  }

  .countries-wrapper {
    display: flex;
    flex-flow: row wrap;
  }

  .countries-wrapper a {
    margin: 0.2rem 0.4rem 0.2rem 0;
  }

  @media (max-width: 900px) {
    margin-top: 4rem;

    h2 {
      margin: 3rem 0 0.5rem 0;
    }

    .country-data-wrapper {
      flex-flow: column wrap;
    }

    .country-data-wrapper img {
      max-width: 100%;
    }

    .country-data-2 {
      margin-top: 1rem;
    }

    .border-countries {
      margin-top: 1rem;
      flex-flow: column wrap;
      align-items: flex-start;
    }

    .border-countries span {
      margin-bottom: 1rem;
    }
  }
`;
