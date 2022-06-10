import React from "react";
import img from "../Productscard/ProductImages/Mens_caps.jpg"

export default function Shoppingcart ({onAdd, onRemove, cartItems}) {

    return(
        <div className="flex justify-center my-6 mx-0 max-w-2xl bg-transparent">
          {cartItems.length === 0 && <div></div>}
        {/* <div className="flex flex-col p-8 text-gray-800 bg-white shadow-lg md:w-4/5 lg:w-4/5"> */}
          <div className="flex-1 justify-end w-2/3">
            <table className="w-full text-sm lg:text-base" cellspacing="0">
              <thead>
                <tr className="h-12 uppercase">
                  <th className="hidden md:table-cell"></th>
                  <th className="text-left">Product</th>
                  <th className="lg:text-right text-left pl-5 lg:pl-0">
                    <span className="lg:hidden" title="Quantity">Qtd</span>
                    <span className="hidden lg:inline">Remove/Add</span>
                  </th>
                  <th className="hidden text-right md:table-cell">Unit price</th>
                  <th className="text-right">Total price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) =>(
                <tr key = {item.pid}>
                  <td className="hidden pb-4 md:table-cell">
                    <a href="#">
                      <img src= {item.thumb_image} className="w-20 rounded" alt="Thumbnail"></img>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <p className="mb-2 md:ml-4">{item.brand}</p>
                      <form action="" method="POST">
                      </form>
                    </a>
                  </td>
                  <td className="justify-center md:justify-end md:flex mt-6">
                    <div className="w-20 h-10">
                      <div className="relative flex flex-row w-full h-8">
                      <button onClick={() => onRemove(item)} className = "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">-</button>
                      
                      <button onClick={() => onAdd(item)} className = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</button>
                      </div>
                    </div>
                  </td>
                  <td className="hidden text-right md:table-cell">
                    <span className="text-sm lg:text-base font-medium">
                      ${item.price}
                    </span>
                  </td>
                  <td className="text-right">
                    <span className="text-sm lg:text-base font-medium">
                      ${item.qty * item.price.toFixed(2)}
                    </span>
                  </td>
                </tr>
                
                ))}
                </tbody>
            </table>
            <button className="flex justify-center max-w-2xl text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">Buy Now!!</button>
            {/* </div> */}
            </div>
        </div>
         
    )

}