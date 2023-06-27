import DiceFieldDice from "../DiceFieldDice";
import styled from "styled-components";

export default function DiceField({ dice, handleRemoval }) {
  return (
    <FieldStyle style={{ background: "pink" }}>
      {dice &&
        dice.map((item, index) => (
          <DiceFieldDice
            key={index}
            index={index}
            handleClick={handleRemoval}
            dType={item.dType}
            value={item.value}
          />
        ))}
    </FieldStyle>
  );
}

const FieldStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
