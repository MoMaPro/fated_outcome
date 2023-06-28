import styled from "styled-components";

const HomeWorkItem = ({ title, summary, Solution = null }) => {
  return (
    <HomeWork>
      <h2 className="problem">{title}</h2>
      <p>{summary}</p>
      <div>{Solution !== null ? <Solution /> : <p> your solution...</p>}</div>
    </HomeWork>
  );
};

export default HomeWorkItem;

const HomeWork = styled.article`
  div {
    border: solid black 2px;
  }

  @media (min-width: 800px) {
    width: 600px;
  }
`;
