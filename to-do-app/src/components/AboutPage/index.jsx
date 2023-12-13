import './style.css'
import { SideBar } from '../SideBar'
import { Header } from '../Header'
import { Footer } from '../Footer'

export const AboutPage = () => {
    return (
     <>
      <Header />
      <main className='aboutContainer'>
      <span>Welcome to our project! Dive into simplicity with our intuitive Todo List. Stay organized effortlessly as you manage tasks, set priorities, and track progress. Enhance your productivity in just a few clicks. Experience the joy of getting things done with our user-friendly and efficient Todo List application.</span>
      <h4>Michel Mendes - 19 years old - Brazilian</h4>
      <h4>Janos Sitku - 37 years old - Hungarian</h4>
      </main>
      <SideBar />
      <Footer />
     </>
    );
  };