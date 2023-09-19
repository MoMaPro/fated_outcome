import styled from "styled-components";
import meowlin from "./images/merchant.png";
import speechBubble from "./images/speechRectangle.png";
import theme from "../../styles/theme";

const Merchant = ({ fatedOutcome, currentQuote }) => {
  return (
    <div>
      <SpeechStyle>
        <div width="200px">
          <img src={speechBubble} alt="speechBubble" width="300px" />
          <p>
            {fatedOutcome !== undefined ? (
              <span>
                You rolled <strong>{fatedOutcome}</strong>
              </span>
            ) : (
              <span>{[currentQuote]}</span>
            )}
          </p>
        </div>
        <img src={meowlin} alt="meowlin" width="300px" />
      </SpeechStyle>
    </div>
  );
};

export default Merchant;

const SpeechStyle = styled.div`
  background-color: ${theme.quaternary};
  display: inline-block;
  position: relative;
  border: dotted 5px ${theme.tertiary};
  img {
    position: relative;
  }
  p {
    position: absolute;
    top: 10px;
    left: 30px;
    padding: 0px 20px;
    color: ${theme.tertiary};
  }
`;
