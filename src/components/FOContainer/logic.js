import { useState } from "react";

const DiceState = () => {
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

  const handleAdd = (dType) => {
    setDice((prevDice) => [
      ...prevDice,
      { dType: dType, value: randomizor(dType) },
    ]);
  };

  return { dice, handleRemoval, diceChange, handleAdd };
};

function randomizor(dType) {
  let d;
  switch (dType) {
    case "d4":
      d = 4;
      break;
    case "d6":
      d = 6;
      break;
    case "d8":
      d = 8;
      break;
    case "d10":
      d = 10;
      break;
    case "d12":
      d = 12;
      break;
    case "d20":
      d = 20;
      break;
    case "d100":
      d = 10;
      break;
    default:
      d = 6;
      break;
  }
  let result = Math.ceil(Math.random() * d);
  return dType == "d100" ? (result == 10 ? "00" : result * 10) : result;
}

export { randomizor, DiceState };
