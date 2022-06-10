import React from "react";
import {useState, useEffect} from "react";
import Home from "../pages/Home";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Aboutus from "../pages/Aboutus";
import {Route, Routes} from 'react-router-dom'
import {Link} from 'react-router-dom'

function Navbar () {

    const [search, setSearch] = useState("sale")

    function handleSubmit(e) {
        e.preventDefault()
        setSearch(search)
    }
    
    function handleChange(e) {
        setSearch(e.target.value)
    }

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [cartItems, setCartItems] = useState([])

    function onAdd (product) {
        const exist = cartItems.find((x) => x.pid === product.pid)
        if(exist) {
            setCartItems (
                cartItems.map((x) => 
                x.pid === product.pid ? { ...exist, qty: exist.qty + 1} : x
                )
            )
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }])
        }
    }

    function onRemove (product) {
        const exist = cartItems.find((x) => x.pid === product.pid);
        if (exist.qty === 1) {
          setCartItems(cartItems.filter((x) => x.pid !== product.pid));
        } else {
          setCartItems(
            cartItems.map((x) =>
              x.pid === product.pid ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
      };
    

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Host': 'apidojo-forever21-v1.p.rapidapi.com',
              'X-RapidAPI-Key': '78bed3a4a8mshbf6e6f99e1ad1a5p14e1ddjsn26dbe05350e0',
            },
          };
          const url = `https://apidojo-forever21-v1.p.rapidapi.com/products/search?query=${search}&rows=4&start=0&color_groups=black`;
          const timer = setTimeout(() => {fetch(url, options)
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoading(false)
                    setData(result.response.docs)
        
                })}, 3000)

                return () => clearTimeout(timer)
            },[search])
    return(
        <>
        <nav
        className = "flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
            <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                <Link to="/" onClick={() => setSearch("sale")} className="font-semibold text-xl tracking-tight">FOREVER21</Link>
            </div>
        </div>
    
        <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div className="text-md font-bold text-blue-700 lg:flex-grow">
                <Link to="/Men" onClick={() => setSearch("Men")}
                   className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    Men
                </Link>
                <Link to="/Women" onClick={() => setSearch("Women")}
                   className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    Women
                </Link>
                <Link to="/Aboutus"
                   className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    About Us
                </Link>
            </div>
            <div className="relative mx-auto text-gray-600 lg:flex-grow">
                <form onSubmit={handleSubmit}>
                    <input
                    className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none w-4/5"
                    type="text" name="search" placeholder="Enter product" value = {search} onChange = {handleChange}/>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-4 py-2 px-4 rounded">
                 Search
                </button>
                </form>
            </div>
        </div>
    
    </nav>  
    <Routes>
        <Route path = "/" element = {<Home data = {data} isLoading = {isLoading} cartItems = {cartItems} onAdd={onAdd} onRemove={onRemove}/>} />
        <Route path = "/Men" element = {<Men data = {data} isLoading = {isLoading} cartItems = {cartItems} onAdd={onAdd} onRemove={onRemove}/>} />
        <Route path = "/Women" element = {<Women data = {data} isLoading = {isLoading} cartItems = {cartItems} onAdd={onAdd} onRemove={onRemove} />} />
        <Route path = "/Aboutus" element = {<Aboutus/>} />
    </Routes>
  
  </>
    )

}

export default Navbar;


