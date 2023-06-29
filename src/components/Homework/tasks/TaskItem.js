import styled from "styled-components";

const TaskItem = ({ title, summary, children }) => {
  return (
    <HomeWork>
      <h2 className="problem">{title}</h2>
      <p>{summary}</p>
      <div>{children ? children : <p> your solution...</p>}</div>
    </HomeWork>
  );
};

export const useTaskItem = (data, render) => {
  const render = TaskItem({ data });
  return { title: data.title, summary: data.summary, Item: render };
};

export default TaskItem;

const HomeWork = styled.article`
  div {
    border: solid black 2px;
  }

  @media (min-width: 800px) {
    width: 500px;
  }
`;
