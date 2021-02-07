import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
             
        
        
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href ='https://www.instagram.com/homelessprojectmaastricht/'>Instagram</a>
           

            <a href='https://www.facebook.com/homelessprojectmaastricht'> Facebook     </a>
            
          
            <small class='website-rights'>HPM © 2020</small>
        </div>
        
        </div>
      </div>
      <section class='social-media'>
        {/* <div classname='social-icons'>
      
        </div> */}
      
        <div class='social-media-wrap'>
        <h5>Email: homelessprojectmaastricht@gmail.com</h5>
                 </div>
      </section>
    </div>
  );
}

export default Footer;
