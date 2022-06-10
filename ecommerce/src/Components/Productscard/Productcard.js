import React from "react"

function Productcard ({data, onAdd}) {

  const {thumb_image, brand, title, price} = data
    return (
        
    <div className="bg-white">
      <img src= {thumb_image} alt="" className="w-full sm:h-80 object-contain"></img>
      <div className="px-10 py-6 text-center">
        <div className="text-2xl font-bold text-purple-500 mb-4 italic">{brand}</div>
        <div className="font-serif italic font-bold text-sm truncate text-red-800">{title}</div>
        <div className="text-m font-serif font-bold my-2 text-blue-800">${price}</div>
      </div>
      <button onClick={() => onAdd(data)} className="w-full text-lg h-16 text-white font-extrabold bg-purple-500 rounded-tr-lg rounded-bl-lg">
        Add to Cart</button>
    </div>
    )
}

export default Productcard

