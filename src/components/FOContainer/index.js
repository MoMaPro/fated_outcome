import React, { useState, useEffect } from "react";
import randomizor from "./logic";
import DiceField from "../DiceField";

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
    console.log(dIndex);
    setDice((prevDice) => prevDice.filter((_, index) => index !== dIndex));
  };

  // useEffect(() => {
  //   setDice((prevDice) => [prevDice[0]]);
  // }, []);

  return (
    <div style={{ background: "lightgreen" }}>
      <DiceField dice={dice} handleRemoval={handleRemoval} />
    </div>
  );
};
export default FOContainer;
