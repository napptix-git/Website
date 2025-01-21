import React from "react"
import Navbar from "./components/ui/NavGpt";
import { TextRevealWord } from "./components/ui/textReveal";
import ScrollIndicator from "./components/Animations/ScrollIndicator";
import { MarqueeDemo } from "./components/ui/marqueedemo";
import { MagicCardDemo } from "./components/ui/MagicCard";
import GameScroll from "./components/ui/GameAds";
import { GlobeDemo } from "./components/ui/Globe";
import GameScrollAnimation from "./components/ui/GameScroll";
import AdsAniamte from "./components/ui/ScrollingAds";
import AuthSection from "./components/ui/demoScroll";
import BoxGrid from "./components/ui/demoScroll";
import BoxAnimation from "./components/ui/ScrollingAds";
import CircularTextAnimation from "./components/ui/GamingReveal";



const App = () => {
  return (  
    <>    
      <div className="relative w-full h-screen ">
        <Navbar />
        <div>
         <CircularTextAnimation />
        </div>

        {/* <FlickeringGridDemo/> */}
        {/* <DotPatternDemo /> */}

        {/* <TextRevealDemoBolt /> */}

        <div className="h-[30vh]"></div>
        
        <div className="">
              
              <TextRevealWord/>
        </div>
      
        {/* Scroll Indicator component */}
         <ScrollIndicator/>
      </div>
        {/* Distance between partner and text */}
      {/* <div className="h-[120vh]"></div> */}

      <div className="h-[470vh]"></div>

      {/* Partners Component */}
      <div className="flex justify-center items-center h-screen">
        <MarqueeDemo/>
      </div>

      <div className="h-[50vh]"></div>

      {/* Advertisers and Publishers Card Component     */}
      <div className="flex ml-[150px] w-[80%]">
        <MagicCardDemo />
      </div>

      <div className="h-[50vh]"></div>

      {/* Using this as a demo game scroll component for making intital changes */}
       <div className="pt-20">
          <BoxAnimation />
       </div>

      <div className="h-[50vh]"></div>

      {/* <div className="flex justify-center items-center mt-[100px]">
        <GlobeDemo />
      </div>   */}



      
    </>
  )
}

export default App
