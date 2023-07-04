import styled from "styled-components";
import ExampleHelper from "./example-00";

//PROPERTIES EXAMPLE
//Make a new Functional Element and declare a few properties within. Allow the Element to do something with the properties.
//Style to your hearts content
const Solution = ({ name, age }) => {
  return (
    <SolutionStyle>
      {" "}
      <ExampleHelper className="helper" />
      <h1>
        my name is {name}. My cat is {age} years old.
      </h1>
    </SolutionStyle>
  );
};

//And Render Them
const Render = () => {
  return <Solution name="Marie" age={5} />;
};

const SolutionStyle = styled.div`
  ul {
    text-align: left;
  }
  pre {
    font-size: 0.7rem;
    color: red;
  }
  @media (max-width: 800px) {
    pre {
      font-size: 0.55rem;
    }
  }
`;

//leave code below alone
const solution = {
  title: "properties_example",
  summary: `task-00: Make a new Functional Element and declare a few properties within. Allow the Element to do something with the properties.`,
  item: <Render />,
};
export default solution;
