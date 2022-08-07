import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import data from "./data.json"

import b2 from"./assets/destination/background-destination-desktop.jpg"


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

           Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! Explore
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
        Destinations
        <div style={{height:"100vh",color:"white",backgroundImage:"./assets/destination/background-destination-desktop.jpg"}}>
          <div>
            
            </div>
          
          des1{JSON.stringify(data.destinations[0])}</div>
      </div>
    </div>
  );
}

export default App;
