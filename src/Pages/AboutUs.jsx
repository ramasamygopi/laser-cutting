import React from 'react';
import { Header } from '../component/MainHeader';
import { Footer } from '../component/Footer';
import { AboutLanding } from '../container/About/AboutLanding';
import { AboutVideo } from '../container/About/AboutVideo';
import { MissionComponent } from '../container/About/MissionComponent';
import { Ourteam } from '../container/About/Ourteam';
import { Fixedmsg } from '../container/Home/Fixedmsg';

const Home = () => {
  return (
    <>
    <Header/>
    <AboutLanding/>
    <AboutVideo/>
    <MissionComponent/>
    <Ourteam/>
    <Fixedmsg/>
    <Footer/>
    </>
  )
}
export default Home;