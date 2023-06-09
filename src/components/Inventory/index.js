import styled from "styled-components";
import InventoryItem from "./InventoryItem";
import theme from "../../styles/theme";

const Inventory = ({ handleAdd, diceChange, clearDiceField }) => {
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
      <div className="table">
        <div className="row">
          <InventoryItem handleAdd={handleAdd} dType="d4" />

          <InventoryItem handleAdd={handleAdd} dType="d6" />

          <InventoryItem handleAdd={handleAdd} dType="d8" />

          <InventoryItem handleAdd={handleAdd} dType="d10" />
        </div>
        <div className="row">
          <InventoryItem handleAdd={handleAdd} dType="d12" />

          <InventoryItem handleAdd={handleAdd} dType="d20" />

          <InventoryItem handleAdd={handleAdd} dType="d100" />
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
  border: solid ${theme.secondary} 3px;
  color: ${theme.secondary};

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: center;
  }

  .table {
    border-top: solid ${theme.secondary} 3px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .menu-button {
    border-radius: 30px;
    border: solid ${theme.secondary} 5px;
    background-color: ${theme.secondary};
    color: ${theme.primary};
  }
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
