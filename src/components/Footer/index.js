import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ position: "absolute", bottom: "10px" }}>
      <Link style={{ margin: "5px" }} to="/">
        home
      </Link>

      <Link style={{ margin: "5px" }} to="/homework">
        homework
      </Link>
    </footer>
  );
};

export default Footer;
