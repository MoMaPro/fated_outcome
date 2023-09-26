import styled from "styled-components";
import theme from "../../styles/theme";
import { useState } from "react";

const ModifierModal = ({ handleModal, handleModifier, modifier }) => {
  const [displayInput, setDisplayInput] = useState(modifier);
  const handleInput = (e) => {
    setDisplayInput(e.target.value);
  };

  const handleApply = () => {
    handleModifier(displayInput);
    handleModal();
  };

  return (
    <ModalStyle className="modifier-modal">
      <div className="off-click" onClick={handleModal}></div>
      <div className="modal-body">
        <p>Add your modifier to your total</p>
        <input
          type="number"
          onChange={handleInput}
          value={displayInput}
        ></input>
        <button onClick={handleApply}>Apply</button>
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
    top: 20%;
    left: 25%;
    background-color: ${theme.tertiary};
    color: ${theme.secondary};
    width: fit-content;
    padding: 20px;
    border-radius: 30px;
    align-self: center;
    text-align: center;

    input {
      margin: 20px;
    }

    button {
      background-color: ${theme.secondary};
      color: ${theme.quaternary};
      border-radius: 30px;
    }
  }
`;
