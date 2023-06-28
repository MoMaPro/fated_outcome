import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{ position: "fixed", border: "dotted 2px red", width: "100%" }}
    >
      <Link style={{ margin: "5px" }} to="/">
        home
      </Link>

      <Link style={{ margin: "5px" }} to="/homework">
        homework
      </Link>
    </header>
  );
};

export default Header;
