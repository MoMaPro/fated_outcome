import React, { useState } from "react";
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

  return (
    <div style={{ background: "lightgreen" }}>
      <DiceField dice={dice} />
    </div>
  );
};
export default FOContainer;
