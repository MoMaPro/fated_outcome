import { useState } from "react";
import styled from "styled-components";

//MODIFY STATE
//The button displays what is in state. Finish setting up the UseState hook and set up the handler to modify state onClick
//Style to your hearts content
const Solution = () => {
  const [state] = useState(1);

  const handleClick = () => {};

  return (
    <SolutionStyle onClick={handleClick}>
      <strong>{state}</strong>
    </SolutionStyle>
  );
};

//And Render Them
const Render = () => {
  return <Solution />;
};

const SolutionStyle = styled.button``;

//leave code below alone
const solution = {
  title: "modify_state",
  summary:
    "task-01: The button displays what is in state. Finish setting up the UseState hook and set up the handler to modify state onClick",
  item: <Render />,
};
export default solution;
