import styled from "styled-components";
import d6 from "./images/D6.png";
import diceFace from "./DiceImages";
//container that holds dice
//style={{ backgroundImage: `url(${dFace})` }}

const DiceFieldDice = ({ dType, value, handleClick }) => {
  const dFace = diceFace(dType);
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
  width: 150px;
  height: 150px;

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
