import React, { useState, useEffect } from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";

//MODIFY STATE
//The button displays what is in state. Finish setting up the UseState hook and set up the handler to modify state onClick
//Style to your hearts content
const Solution = ({ record }) => {
  const [clickCount, setClickCount] = useState(1);
  const [timer, setTimer] = useState(60);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <SolutionStyle>
      <div>
        <h1>{timer} seconds</h1>
        <h4>
          My record for clicks in 1 minute is {record}. What's yours? *Drum
          Roll* ...
          <strong>{clickCount}</strong>
        </h4>
        <button className="button" onClick={handleClick}>
          <strong>Click Me</strong>
        </button>
      </div>
    </SolutionStyle>
  );
};

//And Render Them
const Render = () => {
  return <Solution record="275" />;
};

const SolutionStyle = styled.div`
  h4,
  h1 {
    color: ${() => theme.primary};
    background-color: ${() => theme.secondary};
  }

  .button {
    background-color: ${() => theme.secondary};
    color: ${() => theme.primary};
    margin: 1em;
    padding: 10px;
    border-radius: 10px;
  }
  .button:hover {
    color: ${() => theme.secondary};
    background-color: ${() => theme.primary};
  }
`;

//leave code below alone
const solution = {
  title: "modify_state",
  summary:
    "task-01: The button displays what is in state. Finish setting up the UseState hook and set up the handler to modify state onClick",
  item: <Render />,
};
export default solution;
