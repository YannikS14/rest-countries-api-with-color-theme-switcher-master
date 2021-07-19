import styled from 'styled-components';

export const StyledSearchBar = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 5rem;

  input,
  .filter {
    border: none;
    box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.shadow};
    font-family: inherit;
    font-weight: 600;
    background: ${({ theme }) => theme.elements};
    border-radius: 5px;
    font-size: 0.875rem;
  }

  input {
    padding: 1.25rem 1.25rem 1.25rem 4rem;
    width: 100%;
    color: ${({ theme }) => theme.text};
  }

  input::placeholder {
    color: ${({ theme }) => theme.input};
  }

  input:focus {
    outline: 1px solid var(--light-mode-input);
  }

  .search {
    position: relative;
    flex: 0 1 37%;
    min-width: 20rem;
    max-width: 30rem;
  }

  .search::before {
    font-family: 'Material Icons';
    font-size: 1.5em;
    color: ${({ theme }) => theme.input};
    content: 'search';
    position: absolute;
    left: 1.5rem;
    top: 1rem;
  }

  button {
    cursor: pointer;
    width: 100%;
    font-family: inherit;
    background: inherit;
    color: inherit;
    border: none;
    font-weight: 600;
    font-size: 0.875rem;
    text-align: left;
  }

  .filter {
    position: relative;
    flex: 0 1 17%;
    padding: 1.25rem 4.5rem 1.25rem 1.5rem;
    min-width: 13rem;
    max-width: 13rem;
    color: ${({ theme }) => theme.input};
  }

  button::after {
    font-family: 'Material Icons';
    font-size: 1.5em;
    content: 'expand_more';
    position: absolute;
    right: 1rem;
  }

  ul {
    /* display: none; */
    position: absolute;
    top: 50px;
    left: 0;
    padding: 0.75rem 4.5rem 0.75rem 1.5rem;
    background: ${({ theme }) => theme.elements};
    list-style: none;
    border-radius: 5px;
    font-weight: 600;
    width: 100%;
    box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.shadow};
  }

  li {
    padding: 0.2rem 0;
    font-size: 0.875rem;
  }

  @media (max-width: 700px) {
    margin: 0 1rem;

    .search {
      margin-bottom: 3rem;
      flex: 0 1 100%;
      min-width: 5rem;
      max-width: 100%;
    }
  }
`;
