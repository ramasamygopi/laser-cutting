import React from 'react';
import { Header } from '../component/MainHeader';
import ServiceLanding from '../container/service/serviceLanging';
import Materials from '../container/service/Material';
import { Footer } from '../component/Footer';
import LaserCutting from '../container/service/LaserCutting';
import Industries from '../container/service/Industries';
import { Fixedmsg} from '../container/Home/Fixedmsg';

const Services = () => {
  return (
    <>
    <Header/>
   <ServiceLanding/>
   <LaserCutting/>
   <Materials/>
   <Industries/>
   <Fixedmsg/>
    <Footer/>
    </>
  )
}
export default Services;
