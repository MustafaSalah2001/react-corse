import Navbar from "./Navbar";

function Header({ Links }) {
  return (
    <header>
      <a href="/">logo</a>
      <Navbar Links={Links} />
    </header>
  );
}

export default Header;
