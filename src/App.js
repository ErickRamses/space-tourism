import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import data from "./data.json"

import b2 from"./assets/destination/image-moon.png"
import b3 from"./assets/destination/image-mars.png"
import b4 from"./assets/destination/image-europa.png"
import b5 from"./assets/destination/image-titan.png"


function App() {
  useEffect(()=>{
    console.log(data)
    
  },[])
  
  return (
    <div className="App">
     
      <div className='firs'>
        <div style={{color:"white",maxWidth:"400px",}}>

           <span style={{fontSize:"1.5rem",fontFamily: "Lucida Console, Courier New, monospace"}}>So, you want to travel to</span>
           <br></br>
           <span style={{fontSize:"7rem",fontFamily: "Times New Roman, Times, serif"}}>Space</span>
           <br></br>
           <br></br>
           <span style={{fontSize:"1.2rem",}}>
           Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! Explore
           </span>
        </div>

      </div>
      <div className="topnav">
  <a href="#home" onClick={()=>{
     window.scroll(0,0)
  }}>Home</a>
  <a href="#news">Destinations</a>
  <a href="#contact">Tecnology</a>
  <a href="#about">About</a>
</div>
      <div>
        <div className='moon' style={{color:"white"}}>
        <br></br>
        <br></br>
      <span style={{fontSize:"3rem",fontFamily: "Times New Roman, Times, serif"}}>
        Destinations

      </span>
        <br></br>
        <br></br>
        <br></br>

        <span style={{fontSize:"3rem",fontFamily: "Times New Roman, Times, serif"}}>Moon</span>
        
          <br></br>
          <br></br>

          <div style={{overflow:"hidden"}}> 
            <img src={b2} ></img>
          </div>
          <div style={{maxWidth:"600px",marginLeft:"auto",marginRight:"auto"}}>
          <span style={{fontSize:"1.1rem",fontFamily: "Lucida Console, Courier New, monospace"}}>
          See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites
          
          </span>
          <br></br>
          <br></br>
          

          <div style={{fontSize:"1.2rem",fontFamily: "Lucida Console, Courier New, monospace",textAlign:"left"}}>
            distance: 384,400 km
            <br></br>
            travel: 3 days

          </div>
          <br></br>
          <br></br>

          </div>
          </div>
          <div className='moon' style={{color:"white"}}>
        <br></br>
        <span style={{fontSize:"3rem",fontFamily: "Times New Roman, Times, serif"}}>Mars</span>
        
          <br></br>
          <br></br>

          <div style={{overflow:"hidden"}}> 
            <img src={b3} ></img>
          </div>
          <div style={{maxWidth:"600px",marginLeft:"auto",marginRight:"auto"}}>
          <span style={{fontSize:"1.1rem",fontFamily: "Lucida Console, Courier New, monospace"}}>
          Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
          
          </span>
          <br></br>
          <br></br>
          

          <div style={{fontSize:"1.2rem",fontFamily: "Lucida Console, Courier New, monospace",textAlign:"left"}}>
            distance: 225 mil. km
            <br></br>
            travel: 9 months
          </div>
          <br></br>
          <br></br>

          </div>
          </div>
          <div className='moon' style={{color:"white"}}>
        <br></br>
        <span style={{fontSize:"3rem",fontFamily: "Times New Roman, Times, serif"}}>Europa</span>
        
          <br></br>
          <br></br>

          <div style={{overflow:"hidden"}}> 
            <img src={b4} ></img>
          </div>
          <div style={{maxWidth:"600px",marginLeft:"auto",marginRight:"auto"}}>
          <span style={{fontSize:"1.1rem",fontFamily: "Lucida Console, Courier New, monospace"}}>
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
          
          </span>
          <br></br>
          <br></br>
          

          <div style={{fontSize:"1.2rem",fontFamily: "Lucida Console, Courier New, monospace",textAlign:"left"}}>
            distance: 628 mil. km
            <br></br>
            travel: 3 years
          </div>
          <br></br>
          <br></br>

          </div>
          </div>
          <div className='moon' style={{color:"white"}}>
        <br></br>
        <span style={{fontSize:"3rem",fontFamily: "Times New Roman, Times, serif"}}>Titan</span>
        
          <br></br>
          <br></br>

          <div style={{overflow:"hidden"}}> 
            <img src={b5} ></img>
          </div>
          <div style={{maxWidth:"600px",marginLeft:"auto",marginRight:"auto"}}>
          <span style={{fontSize:"1.1rem",fontFamily: "Lucida Console, Courier New, monospace"}}>
          The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
          
          </span>
          <br></br>
          <br></br>
          

          <div style={{fontSize:"1.2rem",fontFamily: "Lucida Console, Courier New, monospace",textAlign:"left"}}>
            distance: 1.6 bil. km
            <br></br>
            travel: 7 years
          </div>
          <br></br>
          <br></br>

          </div>
          </div>
          Tecnology
      </div>
    </div>
  );
}

export default App;
