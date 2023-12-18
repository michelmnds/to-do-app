import "./style.css";
import { SideBar } from "../SideBar";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const TaskPage = ({ list }) => {
  const [sideBar, setSideBar] = useState(false);

  const { taskId } = useParams();
  // eslint-disable-next-line react/prop-types
  const currentTask = list.find((task) => {
    return taskId == task.id;
  });

  return (
    <>
      <Header sideBar={sideBar} setSideBar={setSideBar} />
      <main className="taskPageContainer">
        <h1>{currentTask.task}</h1>
        {currentTask.completed ? (
          <h4>Status: Completed</h4>
        ) : (
          <h4>Status: Not Completed</h4>
        )}
        <Link to="/">
          <button style={{ width: 100 }}>Back</button>
        </Link>
      </main>
      <SideBar sideBar={sideBar} setSideBar={setSideBar} />
      <Footer />
    </>
  );
};
