import styled from "styled-components";
import InventoryItem from "./InventoryItem";
import ModifierModal from "./ModifierModal";
import theme from "../../styles/theme";
import * as images from "./wares";
import { useState } from "react";

const Inventory = ({
  handleAdd,
  diceChange,
  clearDiceField,
  handleModifier,
  modifier,
}) => {
  const [modalActive, setModalActive] = useState(false);

  const modalHandler = () => {
    setModalActive(!modalActive);
  };

  return (
    <InventoryStyle>
      <div className="header">
        <h3>Dice Inventory</h3>
        <h4>
          We <span style={{ fontSize: "0.3rem" }}>can't</span> guarantee our
          dice are balanced :3 !
        </h4>

        <RollStyle className="menu-button" onClick={diceChange}>
          Roll Dice
        </RollStyle>
        <ClearStyle className="menu-button" onClick={clearDiceField}>
          Clear Field
        </ClearStyle>
      </div>
      {modalActive && (
        <ModifierModal
          handleModal={modalHandler}
          handleModifier={handleModifier}
          modifier={modifier}
        />
      )}
      <div className="table">
        <div className="row">
          <InventoryItem
            index={0}
            iFunction={handleAdd}
            dType="d4"
            productImage={images.D4button}
          />

          <InventoryItem
            index={1}
            iFunction={handleAdd}
            dType="d6"
            productImage={images.D6button}
          />

          <InventoryItem
            index={2}
            iFunction={handleAdd}
            dType="d8"
            productImage={images.D8button}
          />

          <InventoryItem
            index={3}
            iFunction={handleAdd}
            dType="d10"
            productImage={images.D10button}
          />
        </div>
        <div className="row">
          <InventoryItem
            index={0}
            iFunction={handleAdd}
            dType="d12"
            productImage={images.D12button}
          />

          <InventoryItem
            index={1}
            iFunction={handleAdd}
            dType="d20"
            productImage={images.D20button}
          />

          <InventoryItem
            index={2}
            iFunction={handleAdd}
            dType="d100"
            productImage={images.D100button}
          />
          <div style={{ position: "relative" }}>
            {modifier !== "0" && (
              <ModifierStyle onClick={modalHandler}>
                <h3>{modifier}</h3>
              </ModifierStyle>
            )}
            <InventoryItem
              index={3}
              iFunction={modalHandler}
              dType="mod"
              productImage={images.modEelBlack}
            ></InventoryItem>
          </div>
        </div>
      </div>
    </InventoryStyle>
  );
};

//<h4>We guarantee our dice are balanced :3 !</h4>
export default Inventory;

// background-image: ${({ dType }) => `url(${getDiceShape(dType)})`};
const InventoryStyle = styled.div`
  display: flex;
  flex-direction: column;
  border: solid ${theme.quaternary} 3px;
  height: fit-content;
  color: ${theme.secondary};
  background-color: ${theme.tertiary};

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: center;
  }

  .table {
    border-top: solid ${theme.quaternary} 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .row {
    display: flex;
    padding: 0px;
    margin: 0;
  }
  .menu-button {
    border-radius: 30px;
    border: solid ${theme.secondary} 5px;
    background-color: ${theme.secondary};
    color: ${theme.tertiary};
  }
`;
const ModifierStyle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  width: 2.5rem;
  height: 2.5rem;
  top: -5px;
  left: -5px;
  border-radius: 300px;
  border: solid 1px;
  text-align: center;
  background-color: ${theme.quaternary};
  color: ${theme.quinary};
`;

const RollStyle = styled.button`
  position: absolute;
  left: 15px;
`;
const ClearStyle = styled.button`
  position: absolute;
  right: 15px;
`;

//DISPLAY DICE IN INVENTORY
//Create a new component, name it Inventory.
//add a new file to it called index.js.
//import styled from "styled-components";
//import diceFace from "DiceImages;
//init arrow function: const Inventory = () => {}
//put dType, dice and handleAdd in the deconstructed brackets
//
//create an InventoryStyle , that contains the click event handleAdd
//Add Div Tags , inside  put <h4>Dice Inventory</h4> and table
//export default Inventory
// create function to begin styling, InventoryStyle = styled.div``;
//Add link to include dType, that has array of dice
//Style Table , background brown & border 1px solid black
