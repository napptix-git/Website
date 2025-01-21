import React from "react";
import Navbar from "./Components/ui/Navbar";
import Navdemo from "./Components/ui/NavDemo";
import { TextRevealDemo } from "./Components/Animations/TextReveal";
import { MarqueeDemo } from "./Components/Animations/MarqueeMain";

function App() {

  return (
    <>
      <Navdemo />
      {/* <h1 className='flex justify-center items-center text-4xl font-bold text-blue-400'>
        Hello World!
      </h1> */}
      <TextRevealDemo />
      <MarqueeDemo />
    </>
  )
}

export default App;
