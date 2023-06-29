import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import tasks from "./tasks";
import { useTaskItem } from "./tasks/TaskItem";

const Homework = () => {
  const taskArray = Object.values(tasks).map((task) => task.title);

  const navigate = useNavigate();
  const handleChange = (event) => {
    const selectedPage = event.target.value;
    navigate(selectedPage);
  };

  const params = useParams();
  const paramsTask = () => {
    const defaultTaskItem = {
      title: "No Task Found",
      summary: "error in path",
      item: <p style={{ color: "red" }}>TURN BACK, WHILE YOU STILL CAN!</p>,
    };
    return tasks[params.title] ? tasks[params.title] : defaultTaskItem;
  };
  const { Item } = useTaskItem(paramsTask());

  return (
    <Container>
      <header>
        <select onChange={handleChange}>
          {taskArray &&
            taskArray.map((task) => (
              <option key={task} value={`/homework/${task}`}>
                {task}
              </option>
            ))}
        </select>
        <h1>HOMEWORK</h1>
      </header>
      {Item}
    </Container>
  );
};

export default Homework;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  select {
    position: fixed;
    top: 5px;
    right: 5px;
  }

  @media (min-width: 800px) {
    header {
      width: 300px;
    }
  }
`;
