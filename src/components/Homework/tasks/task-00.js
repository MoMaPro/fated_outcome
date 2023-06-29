import styled from "styled-components";

//PROPERTIES EXAMPLE
//Make a new Functional Element and declare a few properties within. Allow the Element to do something with the properties.
//Style to your hearts content
const Solution = ({ name, age }) => {
  return (
    <SolutionStyle>
      {" "}
      <Helper className="helper" />
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
  pre {
    font-size: 0.7rem;
    color: red;
  }
`;

//leave code below alone
const solution = {
  title: "properties-example",
  summary: `task-00: Make a new Functional Element and declare a few properties within. Allow the Element to do something with the properties.`,
  item: <Render />,
};
export default solution;

const Helper = () => {
  return (
    <ul>
      <li>
        Add your logic to the specified task file in{" "}
        <strong>components/Homework/tasks/</strong> using the{" "}
        <strong>Solution</strong> function
      </li>
      <pre>
        <code>{codeSnippet1}</code>
      </pre>
      <li>
        Then, render your solution in the <strong>Render</strong> function,
        lower in the file
      </li>
      <pre>
        <code>{codeSnippet2}</code>
      </pre>
    </ul>
  );
};

const codeSnippet1 = `const Solution = ({ name, age }) => {
  return (
    <SolutionStyle>
      {" "}
      <Helper className="helper" />
      <h1>
        my name is {name}. My cat is {age} years old.
      </h1>
    </SolutionStyle>
  );
};`;

const codeSnippet2 = `
const Render = () => {
  return <Solution name="Marie" age={5} />;
};`;
