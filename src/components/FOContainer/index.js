import React from "react";
import DiceField from "../DiceField";
import styled from "styled-components";
import Inventory from "../Inventory";

const FOContainer = ({ diceState }) => {
  const { dice, handleRemoval, diceChange, handleAdd, clearDiceState } =
    diceState;
  return (
    <Container>
      <Inventory handleAdd={handleAdd} diceChange={diceChange}></Inventory>
      <DiceField dice={dice} handleRemoval={handleRemoval} />
    </Container>
  );
};
export default FOContainer;

const Container = styled.div`
  padding: 30px;
`;
