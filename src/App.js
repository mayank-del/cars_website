import React,{useState} from "react";
import Contact from "./components/Contact";
import Render from "./components/Render";
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/InfoSection";
import { InfoData,InfoDataTwo,InfoDataThree,InfoDataFour} from "./data/InfoData";
import Hero from'./components/Hero';
import Navbar from "./components/Navbar";
import { SliderData} from "./data/SlideData";
import GlobalStyle from "./globalStyles";

function App() {
   const[isOpen,setIsOpen]=useState(false)
   const toggle=() =>{
     setIsOpen(!isOpen)
   }
  return (
   <>
  <Render />
  <GlobalStyle />
   <Navbar toggle={toggle}/>
   <Dropdown isOpen ={isOpen} toggle={toggle}/>
   <Hero slides={SliderData}/>
  
   <InfoSection  {...InfoData}/>
   <InfoSection  {...InfoDataTwo }/>
   <InfoSection {...InfoDataThree}/>
   <InfoSection  {...InfoDataFour}/>
    </>
  );
}

export default App;
