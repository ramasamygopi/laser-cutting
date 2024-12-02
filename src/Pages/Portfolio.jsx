import React from 'react'
import { Header } from '../component/MainHeader';
import PortfolioLanding from '../container/Portfoliopage/PortfolioLanding';
import Testimonial from '../container/Portfoliopage/Testimonial'
import { Footer } from '../component/Footer';
import PastProject from '../container/Portfoliopage/Project';
import { Fixedmsg } from '../container/Home/Fixedmsg';

 const Portfolio= () => {
  return (
    <>
    <Header/>
    <PortfolioLanding/>
    <PastProject/>
     <Testimonial/>
     <Fixedmsg/>
    <Footer/>
    </>
  )
}
export default Portfolio;
