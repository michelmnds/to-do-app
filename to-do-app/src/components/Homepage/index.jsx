import { Header } from "../Header";
import { SideBar } from "../SideBar";
import { Footer } from "../Footer";
import { ToDoList } from "../ToDoList";
import { Form } from "../Form";
import { useState } from "react";
import data from "../../assets/data.json";

export const HomePage = () => {
  const [title, setTitle] = useState("");
  const [list, setList] = useState(data);

  return (
    <>
      <Header />
      <Form list={list} setList={setList} title={title} setTitle={setTitle} />
      <ToDoList list={list} setList={setList} />
      <SideBar />
      <Footer />
    </>
  );
};
