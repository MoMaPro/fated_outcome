import styled from "styled-components";
import theme from "../../styles/theme";

const ModifierModal = () => {
  <ModalStyle className="modifier-modal">
    <p>This is where the modal will pop up</p>
  </ModalStyle>;
};

export default ModifierModal;

const ModalStyle = styled.div`
  position: absolute;
  top: 150px;
  background-color: ${theme.tertiary};
  color: ${theme.primary};
  width: 50%;
  border-radius: 30px;
  align-self: center;
  text-align: center;
`;
