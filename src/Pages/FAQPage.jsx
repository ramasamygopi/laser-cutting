import React from 'react'
import { Header } from '../component/MainHeader';
import FaqLanding from '../container/Faq/FaqLanding';
import FaqContent from '../container/Faq/FaqContent';
import { Footer } from '../component/Footer';
import { Fixedmsg } from '../container/Home/Fixedmsg';

 const FaqPage =() => {
  return (
    <>
    <Header/>
    <FaqLanding/>
    <FaqContent/>
    <Fixedmsg/>
    <Footer/>
    </>
  )
}
export default FaqPage;