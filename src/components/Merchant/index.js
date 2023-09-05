import styled from "styled-components";
import meowlin from "./images/merchant.png";
import speechBubble from "./images/speechRectangle.png";

const Merchant = ({ fatedOutcome }) => {
  return (
    <div>
      <img src={meowlin} alt="meowlin" width="300px" />
      <SpeechStyle>
        <img src={speechBubble} alt="speechBubble" width="200px" />
        <p>
          {fatedOutcome !== undefined
            ? `You rolled ${fatedOutcome}`
            : "You're all gonna die kids"}
        </p>
      </SpeechStyle>
    </div>
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
