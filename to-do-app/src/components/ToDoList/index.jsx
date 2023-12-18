/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./style.css";
import { Link } from "react-router-dom";

export const ToDoList = ({ list, setList }) => {
  if (!list.length) {
    return (
      <div className="taskContainer">
        <div className="info">
          <span>Task</span>
          <span>Completed</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="taskContainer">
        <div className="info">
          <span>Task</span>
          <span>Actions</span>
        </div>
        {list.length > 7 ? (
          <ul className="taskUl">
            {list.map((task) =>
              !task.completed ? (
                <li className="task" key={task.id}>
                  <Link to={`/tasks/${task.id}`}>
                    <span style={{ color: "white" }} className="taskTitle">
                      {task.task}
                    </span>
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
                </li>
              ) : (
                <li className="task" key={task.id}>
                  <Link to={`/tasks/${task.id}`}>
                    {" "}
                    <span style={{ color: "green" }} className="taskTitle">
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
        ) : (
          <ul style={{ overflow: "hidden", marginLeft: 0 }} className="taskUl">
            {list.map((task) =>
              !task.completed ? (
                <li className="task" key={task.id}>
                  <Link to={`/tasks/${task.id}`}>
                    <span style={{ color: "white" }} className="taskTitle">
                      {task.task}
                    </span>
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
                </li>
              ) : (
                <li className="task" key={task.id}>
                  <Link to={`/tasks/${task.id}`}>
                    {" "}
                    <span style={{ color: "green" }} className="taskTitle">
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
        )}
      </div>
    );
  }
};
