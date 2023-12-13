import { Header } from "../Header";
import { SideBar } from "../SideBar";
import { Footer } from "../Footer";
import { ToDoList } from "../ToDoList";

export const HomePage = () => {
  return (
    <>
      <Header />
      <ToDoList />
      <SideBar />
      <Footer />
    </>
  );
};
