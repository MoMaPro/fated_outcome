import React from "react";
import DiceField from "../DiceField";
import styled from "styled-components";
import Inventory from "../Inventory";

const FOContainer = ({ diceState }) => {
  const { dice, handleRemoval, diceChange, handleAdd } = diceState;
  return (
    <Container>
      <DiceField dice={dice} handleRemoval={handleRemoval} />
      <ButtonStyle onClick={diceChange}>Roll Dice</ButtonStyle>
      <Inventory handleAdd={handleAdd}></Inventory>
    </Container>
  );
};
export default FOContainer;

const ButtonStyle = styled.button`
  border-radius: 30px;
  border: solid purple 5px;
  color: purple;
`;

const Container = styled.div`
  padding: 30px;
`;
