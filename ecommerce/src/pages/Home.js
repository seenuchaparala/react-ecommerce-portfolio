import React from "react";
import Slideshow from "../Slideshow/Slideshow";
import Productsearch from "../Productscard/Productsearch";
import Shoppingcart from "../Shoppingcart/Shoppingcart";

function Home ({data, isLoading, cartItems, onAdd, onRemove}) {
    return(
    <div className='my-0 mx-auto flex flex-col justify-center'>
    <Slideshow />
    <Productsearch data = {data} isLoading = {isLoading} onAdd={onAdd}/>
    <Shoppingcart onAdd={onAdd} onRemove={onRemove} cartItems = {cartItems}/>
  </div>
  )
}


export default Home;