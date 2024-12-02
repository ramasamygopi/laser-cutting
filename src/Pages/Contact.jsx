import React from 'react'
import { Header } from '../component/MainHeader';
import { Footer } from '../component/Footer';
import ContactUs from '../container/Contact/ContactUs';
import { ToastContainer } from 'react-toastify';

 const Contact = () => {
  return (
    <>
    <Header/>
    <ContactUs/>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    <Footer/>
    
    </>
  )
}
export default Contact;