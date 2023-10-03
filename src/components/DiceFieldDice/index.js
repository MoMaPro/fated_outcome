import styled from "styled-components";
import diceFace from "./DiceImages";
import theme from "../../styles/theme";
//container that holds dice

const DiceFieldDice = ({ dType, value, handleClick, index }) => {
  return (
    <DiceStyle dType={dType} onClick={() => handleClick(index)}>
      <img src={diceFace(dType)} alt="diceFace" />
      <div>
        <h3>{value}</h3>
      </div>
    </DiceStyle>
  );
};

export default DiceFieldDice;

const DiceStyle = styled.div`
  display: flex;
  flex: 1;
  flex-basis: calc(20% - 0px);
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  overflow: hidden;
  max-width: 100%;
  flex-shrink: 1;
  flex-grow: 1;

  img {
    width: 100%;
    height: auto;
  }

  div {
    position: absolute;
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
