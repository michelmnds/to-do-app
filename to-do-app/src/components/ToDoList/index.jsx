import "./style.css";
import data from "../../assets/data.json";

export const ToDoList = () => {
  return (
    <div className="taskContainer">
      <h1>TO-DO List</h1>
      <ul className="taskUl">
        {data.map((task) =>
          task.completed ? (
            <li className="task" key={task.task}>
              {task.task}
              <button className="doneBtn">Done</button>
              <button className="deleteBtn">Delete</button>
            </li>
          ) : (
            <li
              className="task"
              style={{ color: "green", textDecoration: "line-through" }}
              key={task.task}
            >
              {task.task}
              <button className="deleteBtn">Delete</button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
