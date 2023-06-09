import { useEffect } from "react";
import { useState } from "react";

const DiceState = () => {
  const [dice, setDice] = useState([]);

  useEffect(() => {
    if (dice.length > 0)
      console.log(dice.reduce((acc, die) => acc + die.value, 0));
  }, [dice]);

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

  const clearDiceState = () => {
    setDice([]);
  };

  return { dice, handleRemoval, diceChange, handleAdd, clearDiceState };
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
      d = 100;
      break;
    default:
      d = 6;
      break;
  }
  let result = Math.ceil(Math.random() * d);
  return result;
}

export { randomizor, DiceState };
