import { Link } from "react-router-dom";
import theme from "../../styles/theme";
import styled from "styled-components";

const Header = () => {
  const linkStyle = {
    margin: "5px",
    textDecoration: "none",
    color: theme.secondary,
  };
  return (
    <HeaderStyle>
      <Link style={linkStyle} to="/">
        home
      </Link>

      <Link style={linkStyle} to="/homework">
        homework
      </Link>
      <img src="fatedLogo.png" alt="Logo" width="250"></img>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  border-bottom: solid 2px ${theme.quaternary};
  background-color: ${theme.tertiary};
  width: 100%;
`;
