import styled from "styled-components";
import speechBubble from "./images/speechRectangle.png";

const Merchant = ({ fatedOutcome }) => {
  return (
    <SpeechStyle>
      <img src={speechBubble} alt="speechBubble" width={"200px"} />
      <p>fated outcome:{` ${fatedOutcome}`}</p>
    </SpeechStyle>
  );
};

export default Merchant;

const SpeechStyle = styled.div`
  display: inline-block;
  position: relative;
  img {
    position: relative;
  }
  p {
    position: absolute;
    top: 10px;
    left: 30px;
  }
`;
