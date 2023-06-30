import styled from "styled-components";

const Dropdown = ({ display, children }) => {
  return (
    <Style className="dropdown">
      <div className="dropdown-icon">{display}</div>
      <div className="dropdown-content">{children}</div>
    </Style>
  );
};

export default Dropdown;
const Style = styled.div`
  .dropdown-content {
    display: none;
  }
  .dropdown-content {
    position: absolute;
  }
  :hover .dropdown-content {
    display: block;
  }
`;
