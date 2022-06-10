import React from "react";
import image from "../Components/Slideshow/images/Slideshow1.jpg"
import Slideshow from "../Components/Slideshow/Slideshow"
import Productsearch from "../Components/Productscard/Productsearch"
import Shoppingcart from "../Components/Shoppingcart/Shoppingcart"

function Home ({data, isLoading, cartItems, onAdd, onRemove}) {
    return(
    <div className='my-0 mx-auto flex flex-col justify-center max-w-6xl'>
      <Slideshow image = {image}/>
      <Productsearch data = {data} isLoading = {isLoading} onAdd={onAdd}/>
      <Shoppingcart onAdd={onAdd} onRemove={onRemove} cartItems = {cartItems}/>
    </div>
  )
}


export default Home;