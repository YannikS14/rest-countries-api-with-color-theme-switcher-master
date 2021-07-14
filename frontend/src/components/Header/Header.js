import { StyledHeader } from './Header.styled.js';

function Header() {
  return (
    <StyledHeader>
      <h1>Where in the world?</h1>
      <div className="modeToggle">Dark Mode</div>
    </StyledHeader>
  );
}

export default Header;
