import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Team</h1>
      <div className='cards__container'>
      <div className='cards__wrapper'>
          <ul className='cards__items'>
           
            <CardItem
              src='images/monikaPic.jpeg'
              name='Monika Utroša'
              text="Hi ! I'm Monika, a student from Slovenia currently exploring how the human brain functions at Maastricht University. I like helping out at HPM because it is a team that finds simple and practical ways to reach out to the homeless."             
            />
           
            <CardItem
              src='images/benPic.jpg'
              name='Ben Gibney'
              text="Hello, I'm Ben UCM graduate who now works at FASoS. I wanted to join the project as I believe that homelessness is a solvable issue and wanted to do what I could to help.   "
            />
            
            <CardItem
              src='images/sveaPic.jpeg'
              name='Svea Pause'
              text = "Hey I’m Svea! I’m from Germany and came to Maastricht to study Psychology. Currently, I’m in my last year of the bachelor. I’ve been working with the project since 2019. What I enjoy the most are the pool games with the people living in the Salvation Army. During these times, the differences between inhabitants and volunteers are barely visible, even though one could recognize the residents by their winning, strategical skills. "

            />
           
            <CardItem
              src='images/kerinaPic.jpeg'
              name='Kerina Yao'
              text="Hi everyone! I'm Kerina, a second year International Track of Medicine student from California. I have been caring for my neighbors experiencing houselessness since 2011. During this time, I have been humbled to get to know and learn from a lot of my friends on the street. All of these experiences have shaped my view of how all people – houseless or not – should be treated, and guide me in my actions as a student, friend, and future doctor. I look forward to being able to make a positive impact in my community here in Maastricht with the Homeless Project Maastricht."
             
            />
            
            <CardItem
              src='images/radiPic.jpeg'
              name='Radi Andreeva'
              text="Hello, my name is Radi and I am an Econometrics bachelor. I’ve joined this organization as a way to help homeless people who are struggling with a substance abuse problem especially during this pandemic. In my free time I like traveling, watching movies and reading."
            />
            
          </ul>
       
         </div>
        
      </div>
    </div>
  );
}

export default Cards;
