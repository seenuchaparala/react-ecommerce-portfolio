import React from "react";
import {useState} from "react";
import Slideshow from "../Slideshow/Slideshow";
import Productsearch from "../Productscard/Productsearch";
import Shoppingcart from "../Shoppingcart/Shoppingcart";

function Navbar () {

    const [search, setSearch] = useState("mens")

    function handleSubmit(e) {
        e.preventDefault();
        setSearch(e.target.value)
    }
    
    function handleChange(e) {
        setSearch(e.target.value)
    
    }
    return(
        <>
        <nav
        className = "flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
            <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                <span className="font-semibold text-xl tracking-tight">FOREVER21</span>
            </div>
        </div>
    
        <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div className="text-md font-bold text-blue-700 lg:flex-grow">
                <a href="#responsive-header"
                   className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    Men
                </a>
                <a href="#responsive-header"
                   className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    Women
                </a>
                <a href="#responsive-header"
                   className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    Contact Us
                </a>
            </div>
            <div className="relative mx-auto text-gray-600 lg:block hidden">
                <form onSubmit={handleSubmit}>
                    <input
                    className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search" value = {setSearch} onChange = {handleChange}/>
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                </button>
                </form>
            </div>
        </div>
    
    </nav>  
    <div className='my-0 mx-auto'>
    <Slideshow />
    
    <Productsearch onSearch  = {setSearch} query = {search}/>
  </div>
  <Shoppingcart />
  </>
    )
    console.log(search)
}

export default Navbar;


