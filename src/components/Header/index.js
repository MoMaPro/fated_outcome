import { Link } from "react-router-dom";
import theme from "../../styles/theme";

const Header = () => {
  const linkStyle = {
    margin: "5px",
    textDecoration: "none",
    color: theme.secondary,
  };
  return (
    <header
      style={{
        position: "fixed",
        border: `solid 2px ${theme.secondary}`,
        backgroundColor: theme.primary,
        width: "100%",
        marginBottom: "3px",
      }}
    >
      <Link style={linkStyle} to="/">
        home
      </Link>

      <Link style={linkStyle} to="/homework">
        homework
      </Link>
    </header>
  );
};

export default Header;
