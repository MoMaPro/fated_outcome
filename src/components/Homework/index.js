import styled from "styled-components";
import { useParams, useNavigate, Link } from "react-router-dom";
import tasks from "./tasks";
import { useTaskItem } from "./tasks/TaskItem";
import Dropdown from "./Dropdown";

const Homework = () => {
  const taskArray = Object.values(tasks).map((task) => task.title);

  const navigate = useNavigate();

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
        <Dropdown display="Tasks">
          {taskArray.map((task) => (
            <Link key={task} to={`/homework/${task}`}>
              <div>{task}</div>
            </Link>
          ))}
        </Dropdown>
        <h1>HOMEWORK</h1>
      </header>

      {params.title
        ? Item
        : taskArray.map((task) => (
            <Link className="taskLink" key={task} to={`/homework/${task}`}>
              <div>{task}</div>
            </Link>
          ))}
    </Container>
  );
};

export default Homework;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5rem;

  .dropdown {
    position: fixed;
    top: 5px;
    right: 5px;
  }

  .dropdown-content {
    right: 15px;
  }

  @media (min-width: 800px) {
    header {
      width: 250px;
    }
  }
`;
