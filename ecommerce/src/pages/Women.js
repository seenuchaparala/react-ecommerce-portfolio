import React from "react";
import Slideshow from "../Components/Slideshow/Slideshow";
import Productsearch from "../Components/Productscard/Productsearch";
import Shoppingcart from "../Components/Shoppingcart/Shoppingcart";
import image from "../Components/Slideshow/images/react-women.jpg"

function Women ({data, isLoading, onAdd, onRemove,cartItems}) {
    return(
    <div className='my-0 mx-auto flex flex-col justify-center max-w-6xl'>
    <Slideshow image = {image}/>
    <Productsearch data = {data} isLoading = {isLoading} onAdd={onAdd}/>
    <Shoppingcart onAdd={onAdd} onRemove={onRemove} cartItems = {cartItems}/>
  </div>)
}


export default Women;