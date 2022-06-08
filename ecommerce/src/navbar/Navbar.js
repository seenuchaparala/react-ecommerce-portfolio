import React from "react";
import {useState} from "react";
import Home from "../pages/Home";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Aboutus from "../pages/Aboutus";
import {Route, Routes} from 'react-router-dom'
import {Link} from 'react-router-dom'

function Navbar () {

    const [search, setSearch] = useState("sale")

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
                <Link to="/" className="font-semibold text-xl tracking-tight">FOREVER21</Link>
            </div>
        </div>
    
        <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div className="text-md font-bold text-blue-700 lg:flex-grow">
                <Link to="/Men"
                   className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    Men
                </Link>
                <Link to="/Women"
                   className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    Women
                </Link>
                <Link to="/Aboutus"
                   className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    About Us
                </Link>
            </div>
            <div className="relative mx-auto text-gray-600 lg:block hidden">
                <form onSubmit={handleSubmit}>
                    <input
                    className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none w-80"
                    type="search" name="search" placeholder="Search" value = {setSearch} onChange = {handleChange}/>
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                </button>
                </form>
            </div>
        </div>
    
    </nav>  
    <Routes>
        <Route path = "/" element = {<Home query = {search}/>} />
        <Route path = "/Men" element = {<Men/>} />
        <Route path = "/Women" element = {<Women />} />
        <Route path = "/Aboutus" element = {<Aboutus/>} />
    </Routes>
    {/* <div className='my-0 mx-auto'>
    <Slideshow />
    
    <Productsearch onSearch  = {setSearch} query = {search}/>
    <Shoppingcart />
  </div> */}
    
  
  </>
    )

}

export default Navbar;


