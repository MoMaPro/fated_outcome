import React, { useState } from "react";
import randomizor from "./logic";
import DiceField from "../DiceField";
import "tachyons";
import styled from "styled-components";

const FOContainer = () => {
  const [dice, setDice] = useState([
    { dType: "d4", value: randomizor("d4") },
    { dType: "d6", value: randomizor("d6") },
    { dType: "d8", value: randomizor("d8") },
    { dType: "d10", value: randomizor("d10") },
    { dType: "d12", value: randomizor("d12") },
    { dType: "d20", value: randomizor("d20") },
    { dType: "d100", value: randomizor("d100") },
  ]);

  const handleRemoval = (dIndex) => {
    setDice((prevDice) => prevDice.filter((_, index) => index !== dIndex));
  };

  const diceChange = () => {
    setDice((oldDice) =>
      oldDice.map(({ dType }) => {
        return { dType: dType, value: randomizor(dType) };
      })
    );
  };

  return (
    <div>
      <DiceField dice={dice} handleRemoval={handleRemoval} />
      <ButtonStyle onClick={diceChange}>Roll Dice</ButtonStyle>
    </div>
  );
};
export default FOContainer;

const ButtonStyle = styled.button`
  border-radius: 30px;
  border: solid purple 5px;
  color: purple;
`;
