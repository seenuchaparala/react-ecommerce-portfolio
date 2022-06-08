import React from "react";
import img from "../Productscard/ProductImages/Mens_caps.jpg"

export default function Shoppingcart () {

    return(
        <div class="flex justify-center my-6 mx-5">
        <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <div class="flex-1">
            <table class="w-full text-sm lg:text-base" cellspacing="0">
              <thead>
                <tr class="h-12 uppercase">
                  <th class="hidden md:table-cell"></th>
                  <th class="text-left">Product</th>
                  <th class="lg:text-right text-left pl-5 lg:pl-0">
                    <span class="lg:hidden" title="Quantity">Qtd</span>
                    <span class="hidden lg:inline">Quantity</span>
                  </th>
                  <th class="hidden text-right md:table-cell">Unit price</th>
                  <th class="text-right">Total price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="hidden pb-4 md:table-cell">
                    <a href="#">
                      <img src= {img} class="w-20 rounded" alt="Thumbnail"></img>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <p class="mb-2 md:ml-4">Earphone</p>
                      <form action="" method="POST">
                        <button type="submit" class="text-gray-700 md:ml-4">
                          <small>(Remove item)</small>
                        </button>
                      </form>
                    </a>
                  </td>
                  <td class="justify-center md:justify-end md:flex mt-6">
                    <div class="w-20 h-10">
                      <div class="relative flex flex-row w-full h-8">
                      <input type="number" value="2" 
                        class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                      </div>
                    </div>
                  </td>
                  <td class="hidden text-right md:table-cell">
                    <span class="text-sm lg:text-base font-medium">
                      10.00€
                    </span>
                  </td>
                  <td class="text-right">
                    <span class="text-sm lg:text-base font-medium">
                      20.00€
                    </span>
                  </td>
                </tr>
                </tbody>
            </table>
            </div>
            </div>
        </div>
         
    )

}