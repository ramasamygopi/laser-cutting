import React from 'react';
import { Header } from '../component/MainHeader';
import { HeroSection } from '../container/Home/HomeLandingpage';
import { Some } from '../container/Home/some';
import { WhyChoose } from '../container/Home/WhyChoose';
import { Footer } from '../component/Footer';
import { Fixedmsg } from '../container/Home/Fixedmsg';

const Home = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Some/>
    <WhyChoose/>
    <Fixedmsg/>
    <Footer/>
    </>
  )
}
export default Home;