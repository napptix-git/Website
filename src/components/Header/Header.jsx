import React from "react";
import FlickeringGrid from "../Animations/flickering-grid";

const Header = () => {
    return(
        <div className="flex justify-center items-center">   
            <FlickeringGrid/>
                <div className="text-3xl font-bold">
                    <h2 className="ml-2">logo</h2>
                    <h2 className="ml-80">Products</h2>
                    <h2 className="ml-10">Advertisers</h2>
                    <h2 className="ml-10">Publishers</h2>
                    <h2 className="ml-10">About US</h2>
                </div>
        </div>
    )
};

export default Header;