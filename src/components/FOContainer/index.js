import React from "react";
import { DiceState } from "./logic";
import DiceField from "../DiceField";
import styled from "styled-components";
import Inventory from "../Inventory";

const FOContainer = () => {
  const { dice, handleRemoval, diceChange } = DiceState();
  return (
    <div>
      <DiceField dice={dice} handleRemoval={handleRemoval} />
      <ButtonStyle onClick={diceChange}>Roll Dice</ButtonStyle>
      <Inventory></Inventory>
    </div>
  );
};
export default FOContainer;

const ButtonStyle = styled.button`
  border-radius: 30px;
  border: solid purple 5px;
  color: purple;
`;
