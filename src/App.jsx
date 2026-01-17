import React from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LandingPage from '../src/LandingPage/Home/HomePage'
import AboutPage from './LandingPage/About/AboutPage'
import ProductsPage from './LandingPage/Products/Hero'
import SupportPage from './LandingPage/Support/SupportPage'
import Pricing from './LandingPage/Pricing/PricingPage'
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
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/login" element={<LoginRedirect />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App