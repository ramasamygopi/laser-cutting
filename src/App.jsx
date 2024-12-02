import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import FAQPage from './Pages/FAQPage';
import Portfolio from './Pages/Portfolio';
import Blog from './Pages/Blog';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqpage" element={<FAQPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </HashRouter>
  );
};

export default App;