import styled from "styled-components";
import getDiceShape from "../DiceFieldDice/DiceImages";

const Inventory = ({ handleAdd }) => {
  return (
    <InventoryStyle>
      <table>
        <thead>
          {" "}
          <tr>
            <th>Dice Inventory</th>
            <th>We guarantee our dice are balanced :3 !</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>test case 0</td>
            <td>test case 1</td>
          </tr>
        </tbody>
      </table>
    </InventoryStyle>
  );
};

export default Inventory;

// background-image: ${({ dType }) => `url(${getDiceShape(dType)})`};
const InventoryStyle = styled.div`
  table {
    background: brown;
    border: 1px solid black;
  }
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
