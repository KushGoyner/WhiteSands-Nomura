import { Outlet } from 'react-router-dom'
import Header from '../common/Header'



import Footer from '../common/Footer'
import Chatbot from './Chatbot'

const UserLayout = () => {
  return (
    <>
      <Header/> 
      <main>
        <Outlet/>
      </main>
      <Footer/>
      <Chatbot/>
    </>
  )
}

export default UserLayout 