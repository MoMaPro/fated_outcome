import styled from "styled-components";
import diceFace from "./DiceImages";
import theme from "../../styles/theme";
//container that holds dice

const DiceFieldDice = ({ dType, value, handleClick, index }) => {
  return (
    <DiceStyle dType={dType} onClick={() => handleClick(index)}>
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
  background-image: ${({ dType }) => `url(${diceFace(dType)})`};
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
    background-color: ${theme.tertiary};
    width: 3rem;
    height: 3rem;
  }
`;
