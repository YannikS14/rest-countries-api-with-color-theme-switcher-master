import { StyledHeader } from './Header.styled.js';

function Header({ toggleTheme }) {
  return (
    <StyledHeader>
      <h1>Where in the world?</h1>
      <button className="modeToggle" onClick={toggleTheme}>
        Dark Mode
      </button>
    </StyledHeader>
  );
}

export default Header;
