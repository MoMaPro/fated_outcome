import styled from "styled-components";

//PROPERTIES-EXAMPLE
//Make a new Functional Element and declare a few properties within. Allow the Element to do something with the properties.
//Style to your hearts content
const Solution = () => {
  return <SolutionStyle> Your Solution...</SolutionStyle>;
};

//And Render Them
const Render = () => {
  return <Solution />;
};

const SolutionStyle = styled.div``;

//leave code below alone
const solution = {
  title: "properties-example",
  summary:
    "Make a new Functional Element and declare a few properties within. Allow the Element to do something with the properties.",
  item: <Render />,
};
export default solution;
