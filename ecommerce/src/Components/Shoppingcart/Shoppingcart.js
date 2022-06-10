import React from "react"


export default function Shoppingcart ({onAdd, onRemove, cartItems}) {

  
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)

    return(
        <div className="flex justify-center my-6 mx-0 max-w-2xl bg-sky-500/50 rounded-lg">
          {cartItems.length === 0 && <div></div>}
        
          <div className="flex-1 justify-end w-2/3">
              <h3 className="text-center h-12 uppercase text-xl font-bold">Cart</h3>
              <table className="w-5/6 mx-4 text-sm lg:text-base" cellSpacing="0">
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
                        <p className="mb-2 md:ml-4 font-bold italic">{item.brand}</p>
                        <form action="" method="POST">
                        </form>
                      </a>
                    </td>
                    <td className="justify-center md:justify-end md:flex mt-6">
                      <div className="w-20 h-10">
                        <div className="relative flex flex-row w-full h-8">
                        <button onClick={() => onRemove(item)} className = "text-white bg-red-700 hover:bg-red-800 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700">-</button>
                        
                        <button onClick={() => onAdd(item)} className = "text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">+</button>
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
            <div className="grid content-center">
              <h2 className="text-center my-4 h-12 uppercase text-xl font-bold">Subtotal: ${itemsPrice.toFixed(2)}</h2>
              <button onClick={() =>alert("Checkout feature will be implemented soon. Thanks you!!!")} className="text-gray-900 my-5 text-bold bg-[#F7BE38] hover:bg-[#F7BE38]/90 font-medium rounded-lg text-sm px-5 py-2.5 content-center mr-2 mb-2">BUY NOW</button>
            </div>
            </div>
        </div>
         
    )

}