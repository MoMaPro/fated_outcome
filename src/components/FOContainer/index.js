import { useState } from "react";
import DiceFieldDice from "../DiceFieldDice";
import randomizor from "./logic";

const FOContainer = () => {
  const { dice, setDice } = useState();
  console.log(randomizor());
  return (
    <div style={{ background: "pink" }}>
      <DiceFieldDice dType="d10" value={randomizor("d10")} />
      <DiceFieldDice dType="d6" value={randomizor("d6")} />
      <DiceFieldDice dType="d8" value={randomizor("d8")} />
    </div>
  );
};
export default FOContainer;
