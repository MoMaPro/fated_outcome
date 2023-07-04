const ExampleHelper = () => {
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
export default ExampleHelper;
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
