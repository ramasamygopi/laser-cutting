import React from 'react'
import { Header } from '../component/MainHeader';
import { BlogLanding } from '../container/Blog/BlogLanding';
import Article from '../container/Blog/Artical';
import { Footer } from '../component/Footer';
import BlogContent from '../container/Blog/BlogContent';
import { Fixedmsg } from '../container/Home/Fixedmsg';

 const Blog = () => {
  return (
    <>
   <Header/>
   <BlogLanding/>
  <BlogContent/>
  <Article/>
  <Fixedmsg/>
   <Footer/>
    </>
  )
}

export default Blog;
