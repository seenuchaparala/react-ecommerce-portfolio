import React from "react";
import Slideshow from "../Slideshow/Slideshow";
import Productsearch from "../Productscard/Productsearch";
import Shoppingcart from "../Shoppingcart/Shoppingcart";

function Men ({query}) {
    return(
    <div className='my-0 mx-auto flex flex-col justify-center'>
    <Slideshow />
    <Productsearch query = "Men"/>
    <Shoppingcart />
  </div>)
}


export default Men;