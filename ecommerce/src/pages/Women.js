import React from "react";
import Slideshow from "../Slideshow/Slideshow";
import Productsearch from "../Productscard/Productsearch";
import Shoppingcart from "../Shoppingcart/Shoppingcart";

function Women ({query}) {
    return(
    <div className='my-0 mx-auto flex flex-col justify-center'>
    <Slideshow />
    <Productsearch query = "Women"/>
    <Shoppingcart />
  </div>)
}


export default Women;