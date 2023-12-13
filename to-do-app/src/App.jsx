import "./App.css";
import { HomePage } from "./components/Homepage";
import { AboutPage } from "./components/AboutPage";
import { Route, Routes } from "react-router-dom";
import { TaskPage } from "./components/TasksPage";
import { NotFoundPage } from "./components/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tasks/:taskId" element={<TaskPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
