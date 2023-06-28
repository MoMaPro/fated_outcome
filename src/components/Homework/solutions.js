import styled from "styled-components";
import { useState } from "react";

//Place your logic in in the function
const Task0Solution = ({ name, age }) => {
  //the style for this was created below the export
  return (
    <Task0Style>
      my name is {name}. I have {age} cats.
    </Task0Style>
  );
};

//Place your logic in in the function
const Task1Solution = () => {
  const [state] = useState(1);

  const handleClick = () => {};

  return (
    <button onClick={handleClick}>
      <strong>{state}</strong>
    </button>
  );
};

//Place your logic in in the function
const Task2Solution = () => {
  return 1;
};

///TASK 2 HELPER FUNCTION
const helper2 = () => {};

//Place your logic in in the function
const Task3Solution = () => {
  //logic here
  return 1;
};

//Place your logic in in the function
const Task4Solution = () => {
  //logic here
  return 1;
};

//Place your logic in in the function
const Task5Solution = () => {
  //logic here
  return 1;
};

//Place your logic in in the function
const Task6Solution = () => {
  //logic here
  return 1;
};

//Place your logic in in the function
const Task7Solution = () => {
  //logic here
  return 1;
};

const solutions = {
  Task0Solution,
  Task1Solution,
  Task2: { Task2Solution, helper2 },
  Task3Solution,
  Task4Solution,
  Task5Solution,
  Task6Solution,
  Task7Solution,
};
export { solutions };

const Task0Style = styled.p`
  color: red;
`;
