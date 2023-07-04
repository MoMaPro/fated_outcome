import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import tasks from "./tasks";
import { useTaskItem } from "./tasks/TaskItem";
import Dropdown from "./Dropdown";
import theme from "../../styles/theme";

const Homework = () => {
  const taskArray = Object.values(tasks).map((task) => task.title);

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
            <Link className="task-link" key={task} to={`/homework/${task}`}>
              <div>{task}</div>
            </Link>
          ))}
        </Dropdown>
        <h1>HOMEWORK</h1>
      </header>

      {params.title
        ? Item
        : taskArray.map((task) => (
            <Link className="task-link" key={task} to={`/homework/${task}`}>
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

  background-color: ${() => theme.primary};
  color: ${() => theme.secondary};
  border-color: ${() => theme.tertiary};

  .task-link {
    margin: 0.5rem;
    text-decoration: none;
    color: inherit;
  }

  .dropdown {
    position: fixed;
    top: 2px;
    right: 5px;
  }

  .dropdown-icon {
    border: solid 2px ${() => theme.secondary};
    background-color: ${() => theme.primary};
    border-radius: 5px;
    font-size: 0.8rem;
  }

  .dropdown-content {
    right: 5px;
    background-color: ${() => theme.tertiary};
    border-radius: 15px;
  }

  @media (min-width: 800px) {
    header {
      width: 250px;
    }
  }
`;
