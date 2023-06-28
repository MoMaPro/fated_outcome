import styled from "styled-components";

//Place your logic in in the function
const Task0Solution = ({ name, age }) => {
  //the style for this was created below the export
  return (
    <Task0Style>
      my name is {name}. I have {age} cats.
    </Task0Style>
  );
};

//second example
const Task1Solution = () => {
  //logic here
};

const Task2Solution = {
  //logic here
};

const Task3Solution = {
  //logic here
};

const solutions = {
  Task0Solution,
  Task1Solution,
  Task2Solution,
  Task3Solution,
};
export { solutions };

const Task0Style = styled.p`
  color: red;
`;
