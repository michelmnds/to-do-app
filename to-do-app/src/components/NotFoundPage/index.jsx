import "./style.css";
import { SideBar } from "../SideBar";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      <Header />
      <main className="taskPageContainer">
        <h1>404 - Page not found</h1>
        <Link to="/">
          <button style={{ width: 100 }}>Home</button>
        </Link>
      </main>
      <SideBar sideBar={sideBar} setSideBar={setSideBar} />
      <Footer />
    </>
  );
};
