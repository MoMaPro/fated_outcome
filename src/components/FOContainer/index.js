import React from "react";
import DiceField from "../DiceField";
import styled from "styled-components";
import Inventory from "../Inventory";

const FOContainer = ({ diceState }) => {
  const { dice, handleRemoval, diceChange, handleAdd } = diceState;
  return (
    <div>
      <DiceField dice={dice} handleRemoval={handleRemoval} />
      <ButtonStyle onClick={diceChange}>Roll Dice</ButtonStyle>
      <Inventory handleAdd={handleAdd}></Inventory>
    </div>
  );
};
export default FOContainer;

const ButtonStyle = styled.button`
  border-radius: 30px;
  border: solid purple 5px;
  color: purple;
`;
