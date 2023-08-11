import styled from "styled-components";
import theme from "../../styles/theme";

const ModifierModal = ({ handleModal }) => {
  return (
    <ModalStyle className="modifier-modal">
      <div className="off-click" onClick={handleModal}></div>
      <div className="modal-body">
        <p>This is where the modal will pop up</p>
      </div>
    </ModalStyle>
  );
};

export default ModifierModal;

const ModalStyle = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  .off-click {
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .modal-body {
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${theme.tertiary};
    color: ${theme.primary};
    width: 50%;
    border-radius: 30px;
    align-self: center;
    text-align: center;
  }
`;
