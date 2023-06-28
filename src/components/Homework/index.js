import HomeWorkItem from "./homeworkItem";
import tasks from "./tasks";

const Homework = () => {
  return (
    <div className="container">
      <header>
        <h1>HOMEWORK</h1>
      </header>
      <ol>
        <li>
          <HomeWorkItem title={tasks[0].title} summary={tasks[0].summary} />
        </li>
      </ol>
    </div>
  );
};

export default Homework;
