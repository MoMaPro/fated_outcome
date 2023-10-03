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
    currentQuote,
    setCurrentQuote,
    quotearray,
    shuffleArray,
  } = diceState;
  return (
    <Container>
      <div className="shop-front">
        <Inventory
          handleAdd={handleAdd}
          diceChange={diceChange}
          clearDiceField={clearDiceState}
          handleModifier={handleModifier}
          modifier={modifier}
        ></Inventory>
        <DiceField dice={dice} handleRemoval={handleRemoval} />
      </div>
      <Merchant
        fatedOutcome={total}
        currentQuote={currentQuote}
        setCurrentQuote={setCurrentQuote}
        quotearray={quotearray}
        shuffleArray={shuffleArray}
      />
    </Container>
  );
};
export default FOContainer;

const Container = styled.div`
  padding: 5px 15px 5px 15px;
  background-color: ${theme.primary};
  color: ${theme.secondary};
  .shop-front {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 760px) {
      flex-direction: column;
    }
  }
`;
