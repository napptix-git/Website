"use client";

import React from "react";
import ballons from "../../assets/ballons.png";

const GameScroll = () => {
  return (
    <div className="main-div flex justify-center">
      {/* Main Container */}
      <div className="main h-screen w-[1205px] ml-3 mt-10 rounded-xl shadow-xl flex bg-white relative">
        
        {/* Black Strip on the Left */}
        <div className="stripImg bg-black w-[4px] h-[90%] absolute mt-5 ml-5"></div>

        {/* Content Section */}
        <div className="content-container flex flex-col justify-center items-center w-full px-10 py-5 space-y-10">
          {/* Section 1 */}
          <div className="flex items-center justify-between w-full">
            <div className="textCont w-1/2">
              <h2 className="text-2xl font-bold text-black">On Game</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Repudiandae, accusamus quasi fugiat aut suscipit, quas, <br />
                repellat voluptas nihil necessitatibus
              </p>
            </div>
            <div className="imgCont w-1/2 flex justify-center">
              <img src={ballons} alt="ballons" className="w-40 h-40" />
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex items-center justify-between w-full">
            <div className="textCont w-1/2">
              <h2 className="text-2xl font-bold text-black">In Game</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Repudiandae, accusamus quasi fugiat aut suscipit, quas, <br />
                repellat voluptas nihil necessitatibus
              </p>
            </div>
            <div className="imgCont w-1/2 flex justify-center">
              <img src={ballons} alt="ballons" className="w-40 h-40" />
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex items-center justify-between w-full">
            <div className="textCont w-1/2">
              <h2 className="text-2xl font-bold text-black">Off Game</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Repudiandae, accusamus quasi fugiat aut suscipit, quas, <br />
                repellat voluptas nihil necessitatibus
              </p>
            </div>
            <div className="imgCont w-1/2 flex justify-center">
              <img src={ballons} alt="ballons" className="w-40 h-40" />
            </div>
          </div>

          {/* Section 4 */}
          <div className="flex items-center justify-between w-full">
            <div className="textCont w-1/2">
              <h2 className="text-2xl font-bold text-black">Pro Game</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Repudiandae, accusamus quasi fugiat aut suscipit, quas, <br />
                repellat voluptas nihil necessitatibus
              </p>
            </div>
            <div className="imgCont w-1/2 flex justify-center">
              <img src={ballons} alt="ballons" className="w-40 h-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameScroll;
