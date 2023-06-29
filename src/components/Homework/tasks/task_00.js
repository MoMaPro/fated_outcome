import styled from "styled-components";
import { useTaskItem } from "./TaskItem";

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
const data = {
  title: "properties-example",
  summary:
    "Make a new Functional Element and declare a few properties within. Allow the Element to do something with the properties.",
};

const solution = useTaskItem(data, Render);
export { solution };
