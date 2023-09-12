import styled from "styled-components";
import meowlin from "./images/merchant.png";
import speechBubble from "./images/speechRectangle.png";
import theme from "../../styles/theme";

const Merchant = ({ fatedOutcome, currentQuote }) => {
  return (
    <div>
      <img src={meowlin} alt="meowlin" width="300px" />
      <SpeechStyle>
        <img src={speechBubble} alt="speechBubble" width="300px" />
        <p>
          {fatedOutcome !== undefined
            ? `You rolled ${fatedOutcome}`
            : [currentQuote]}
        </p>
      </SpeechStyle>
    </div>
  );
};

export default Merchant;

const SpeechStyle = styled.div`
  background-color: ${theme.quaternary};
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
