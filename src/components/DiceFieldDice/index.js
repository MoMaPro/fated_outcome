import styled from "styled-components";
//container that holds dice

const DiceFieldDice = ({ dType, value, handleClick }) => {
  return (
    <DiceStyle>
      <h3>{value}</h3>
    </DiceStyle>
  );
};

export default DiceFieldDice;

const DiceStyle = styled.div`
  background-color: pink;
`;
