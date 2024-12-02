import React from 'react'
import '../../assets/css/HomePage/Fixed.css';
import {Link} from 'react-router-dom';

export const Fixedmsg = () => {
  return (
    
    <div class="fixed-message-icon">
 <Link to="/contact" id="msg"> <i class="fa-solid fa-comment-dots"></i> </Link>  
   </div>
  )
}
