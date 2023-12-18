import "./App.css";
import { HomePage } from "./components/Homepage";
import { AboutPage } from "./components/AboutPage";
import { Route, Routes } from "react-router-dom";
import { TaskPage } from "./components/TasksPage";
import { NotFoundPage } from "./components/NotFoundPage";
import data from "./assets/data.json";
import { useState } from "react";

function App() {
  const [list, setList] = useState(data);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage list={list} setList={setList} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/tasks/:taskId"
          element={<TaskPage list={list} setList={setList} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
