import React from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LandingPage from '../src/LandingPage/Home/HomePage'
import Navbar from './LandingPage/Navbar'
import Footer from './LandingPage/Footer'
import NotFound from './LandingPage/NotFound'



const LoginRedirect = () => {
  const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL 
  
  
  React.useEffect(() => {
    window.location.href = dashboardUrl
  }, [dashboardUrl])
  
  return <div className='flex justify-center items-center text-3xl font-bold font-serif h-1/2 m-5'>Redirecting to login...</div>
}

const App = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className='bg-[#00001b]'>
      <ToastContainer position="top-right" autoClose={3000} />
      
      
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App