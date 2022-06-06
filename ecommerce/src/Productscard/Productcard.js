import React from "react";

function Productcard ({thumb_image, brand, title, price}) {
    return (
        
        <div className="bg-white">
          <img src= {thumb_image} alt="" className="w-full sm:h-80 object-cover"></img>
          <div class="px-10 py-6 mb-10 text-center">
            <div class="text-2xl font-bold text-purple-500 mb-4">{brand}</div>
            <span class="text-sm">{title}</span>
            <span class="text-m">{price}</span>
          </div>
          <button className="w-full text-lg h-16 text-white font-extrabold bg-purple-500">Add to Cart</button>
        </div>
        

    
    )
}

export default Productcard;

