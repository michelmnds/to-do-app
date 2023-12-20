import { Header } from "../Header";
import { SideBar } from "../SideBar";
import { Footer } from "../Footer";
import { ToDoList } from "../ToDoList";
import { Form } from "../Form";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const HomePage = ({ list, setList }) => {
  const [title, setTitle] = useState("");
  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      <Header sideBar={sideBar} setSideBar={setSideBar} />
      <ToDoList list={list} setList={setList} />
      <Form list={list} setList={setList} title={title} setTitle={setTitle} />
      <SideBar sideBar={sideBar} setSideBar={setSideBar} />
      <Footer />
    </>
  );
};
