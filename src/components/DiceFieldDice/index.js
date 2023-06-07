import styled from "styled-components";
import d6 from "./images/D6.png";
//container that holds dice

const DiceFieldDice = ({ dType, value, handleClick }) => {
  return (
    <DiceStyle>
      <div>
        <h3>{value}</h3>
      </div>
    </DiceStyle>
  );
};

export default DiceFieldDice;

const DiceStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${d6});
  width: 7rem;
  height: 7rem;

  div {
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 30px;
    background-color: pink;
    width: 3rem;
    height: 3rem;
  }
`;
