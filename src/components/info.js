import React from 'react';
import '../App.css';
import './info.css';
import './Cards.css';


function Info() {
  return (
    <section className='info-container'>
         <article class='info-box'>
        
        <h1>Upcoming Events</h1>
  
        <ul>
         
         <li ><p>SinterKlass Boxes</p></li>
         <li><p>Raffle</p></li>
         <li ><p>Event 3</p></li>
   
  
        </ul>
  
        </article>
       

      <article class='info-box'>
        
      <h1>Previous Events</h1>

      <ul>
       
       <li ><p>SinterKlass Boxes</p></li>
       <li><p>Raffle</p></li>
       <li ><p>Event 3</p></li>
 

      </ul>

      </article>
    
    

      
            </section>
  );
}

export default Info;
