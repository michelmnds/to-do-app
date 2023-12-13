import './style.css'
import { SideBar } from '../SideBar'
import { Header } from '../Header'
import { Footer } from '../Footer'

export const NotFoundPage = () => {
    
    return (
     <>
      <Header />
      <main className='taskPageContainer'>
      <h1>404 - Page not found</h1>
      
      </main>
      <SideBar />
      <Footer />
     </>
    );
  };