import DiceFieldDice from "../DiceFieldDice";

const FOContainer = () => {
  return (
    <div style={{ background: "pink" }}>
      <DiceFieldDice dType="d10" value="4" />
      <DiceFieldDice dType="d6" value="4" />
      <DiceFieldDice dType="d8" value="4" />
    </div>
  );
};
export default FOContainer;
