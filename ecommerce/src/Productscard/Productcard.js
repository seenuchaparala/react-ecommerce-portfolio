import React from "react";
import product from './ProductImages/Mens_caps.jpg'

function Productcard () {
    return (
        
        <div className="bg-white">
          <img src= {product} alt="" className="w-full h-full sm:h-80 object-cover"></img>
          <button className="w-full text-lg h-16 text-white font-extrabold bg-purple-500">Shop Caps</button>
        </div>
        

    
    )
}

export default Productcard;

