import React, { useState } from "react";
import DiceFieldDice from "../DiceFieldDice";
import randomizor from "./logic";

const FOContainer = () => {
  const [dice, setDice] = useState([{ dType: "d6", value: randomizor("d6") }]);

  return (
    <div style={{ background: "pink" }}>
      {dice &&
        dice.map((item, index) => (
          <DiceFieldDice key={index} dType={item.dType} value={item.value} />
        ))}
    </div>
  );
};
export default FOContainer;
