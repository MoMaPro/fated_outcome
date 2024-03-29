import theme from "../../styles/theme";
import DiceFieldDice from "../DiceFieldDice";
import styled from "styled-components";

export default function DiceField({ dice, handleRemoval }) {
  return (
    <FieldStyle style>
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
  background-color: ${theme.tertiary};
  border-radius: 30px;
  border: solid ${theme.secondary} 5px;
`;
