/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./style.css";
import { Link } from "react-router-dom";

export const ToDoList = ({ list, setList }) => {
  return (
    <div className="taskContainer">
      <h1>TO-DO List</h1>
      <ul className="taskUl">
        {list.map((task) =>
          !task.completed ? (
            <li className="task" key={task.id}>
              <Link to={`/tasks/${task.id}`}>
                <span className="taskTitle">{task.task}</span>
              </Link>
              <button
                className="doneBtn"
                onClick={() => {
                  task.completed = true;

                  setList([...list]);
                }}
              >
                Done
              </button>
              <button
                className="deleteBtn"
                onClick={() => {
                  const newArr = [];
                  list.map((item) => {
                    if (item.id !== task.id) {
                      newArr.push(item);
                    }
                    setList(newArr);
                  });
                }}
              >
                Delete
              </button>
            </li>
          ) : (
            <li className="task" key={task.id}>
              <Link to={`/tasks/${task.id}`}>
                {" "}
                <span
                  style={{ color: "green", textDecoration: "line-through" }}
                  className="taskTitle"
                >
                  {task.task}
                </span>
              </Link>
              <button
                className="deleteBtn"
                onClick={() => {
                  const newArr = [];
                  list.map((item) => {
                    if (item.id !== task.id) {
                      newArr.push(item);
                    }
                    setList(newArr);
                  });
                }}
              >
                Delete
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
