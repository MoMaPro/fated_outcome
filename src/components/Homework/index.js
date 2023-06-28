import TaskItem from "./TaskItem";
import tasks from "./tasks";
import { solutions as Solutions } from "./solutions";
import styled from "styled-components";

const Homework = () => {
  return (
    <Container>
      <header>
        <h1>HOMEWORK</h1>
        <ul className="hd-ul">
          <li className="hd-li">
            Add your logic to the task in components/Homework/solutions.js
          </li>
          <li className="hd-li">
            Render your Element within the corresponding TaskItem Element in
            components/Homework/index.js
          </li>
        </ul>
      </header>

      <ul className="hw-ul">
        <li className="hw-ul">
          {/* TASK 0*/}
          <TaskItem title={tasks[0].title} summary={tasks[0].summary}>
            <Solutions.Task0Solution name="Marie" age={3} />{" "}
          </TaskItem>
        </li>{" "}
        <li className="hw-ul">
          {/* TASK 1*/}
          <TaskItem
            title={tasks[1].title}
            summary={tasks[1].summary}
          ></TaskItem>
        </li>{" "}
        <li className="hw-ul">
          {/* TASK 2*/}
          <TaskItem
            title={tasks[2].title}
            summary={tasks[2].summary}
          ></TaskItem>
        </li>{" "}
        <li className="hw-ul">
          {/* TASK 3*/}
          <TaskItem
            title={tasks[3].title}
            summary={tasks[3].summary}
          ></TaskItem>
        </li>{" "}
        <li className="hw-ul">
          {/* TASK 4*/}
          <TaskItem
            title={tasks[4].title}
            summary={tasks[4].summary}
          ></TaskItem>
        </li>{" "}
        <li className="hw-ul">
          {/* TASK 5*/}
          <TaskItem
            title={tasks[5].title}
            summary={tasks[5].summary}
          ></TaskItem>
        </li>{" "}
        <li className="hw-ul">
          {/* TASK 6*/}
          <TaskItem
            title={tasks[6].title}
            summary={tasks[6].summary}
          ></TaskItem>
        </li>{" "}
        <li className="hw-ul">
          {/* TASK 67*/}
          <TaskItem
            title={tasks[7].title}
            summary={tasks[7].summary}
          ></TaskItem>
        </li>
      </ul>
    </Container>
  );
};

export default Homework;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  .header {
  }

  .hd-ul {
  }

  .hd-li {
  }

  .hw-ul {
  }

  .hw-li {
  }

  @media (min-width: 800px) {
    header {
      width: 300px;
    }
  }
`;
