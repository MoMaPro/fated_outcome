import React from "react";
import DiceField from "../DiceField";
import styled from "styled-components";
import Inventory from "../Inventory";
import theme from "../../styles/theme";
import { Helmet } from "react-helmet";

const FOContainer = ({ diceState }) => {
  const { dice, handleRemoval, diceChange, handleAdd, clearDiceState } =
    diceState;
  return (
    <Container>
      {" "}
      <Helmet>
        <title>Fated Outcome</title>
        <meta name="description" content="Super Fair Dice Roller" />
      </Helmet>
      <Inventory
        handleAdd={handleAdd}
        diceChange={diceChange}
        clearDiceField={clearDiceState}
      ></Inventory>
      <DiceField dice={dice} handleRemoval={handleRemoval} />
    </Container>
  );
};
export default FOContainer;

const Container = styled.div`
  padding: 30px;
  background-color: ${theme.primary};
`;
