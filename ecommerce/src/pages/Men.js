import React from "react";
import Slideshow from "../Slideshow/Slideshow";
import Productsearch from "../Productscard/Productsearch";
import Shoppingcart from "../Shoppingcart/Shoppingcart";

function Men ({data, isLoading, onAdd, onRemove, cartItems}) {
    return(
    <div className='my-0 mx-auto flex flex-col justify-center max-w-6xl'>
    <Slideshow />
    <Productsearch data = {data} isLoading = {isLoading} onAdd={onAdd}/>
    <Shoppingcart onAdd={onAdd} onRemove={onRemove} cartItems = {cartItems}/>
  </div>)
}


export default Men;