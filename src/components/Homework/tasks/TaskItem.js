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

export const useTaskItem = (data) => {
  const render = TaskItem({
    title: data.title,
    summary: data.summary,
    children: data.item,
  });
  return { title: data.title, summary: data.summary, Item: render };
};

export default TaskItem;

const HomeWork = styled.article`
  div {
    border: solid black 2px;
    width: 100%;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;
