import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './App.css'; 

function App () {
  return (
    <div>
      <Navbar/>
      <Hero/>

      <div className='container'>
      <Card
      img="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
      rating="5.0"
      review="  6 "
      country="USA"
      title="life lessons with katie zaferos"
      price="135"/>

      
      <Card
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTcg7PSG7zMZ9NgeIRdYIzw8yGLD0Uat_CTw&usqp=CAU"
      rating="4.0"
      review="  90 "
      country="India"
      title="life lessons with Shardul"
      price="125"/>
      
      </div>
    </div>
   
   )
}

export default App;
