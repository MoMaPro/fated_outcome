import React from "react";
import DiceField from "../DiceField";
import styled from "styled-components";
import Inventory from "../Inventory";
import theme from "../../styles/theme";
import Merchant from "../Merchant";

const FOContainer = ({ diceState }) => {
  const {
    dice,
    handleRemoval,
    diceChange,
    handleAdd,
    clearDiceState,
    handleModifier,
    modifier,
    total,
  } = diceState;
  return (
    <Container>
      <Merchant fatedOutcome={total} />
      <Inventory
        handleAdd={handleAdd}
        diceChange={diceChange}
        clearDiceField={clearDiceState}
        handleModifier={handleModifier}
        modifier={modifier}
      ></Inventory>
      <DiceField dice={dice} handleRemoval={handleRemoval} />
    </Container>
  );
};
export default FOContainer;

const Container = styled.div`
  padding: 5px 15px 5px 15px;
  background-color: ${theme.primary};
  color: ${theme.tertiary};
`;
