import React from "react";
import { useState, useEffect } from "react";
import Productcard from "./Productcard";

export default function Productsearch ({data, isLoading, onAdd}) {

            

    return (
        isLoading ? (
            <div><h1>LOADING!!!!</h1></div>
        ) : (
            <div className='grid md:grid-cols-4 gap-8 my-5 mx-0 max-w-6xl'>
        <Productcard data = {data[0]} onAdd = {onAdd}/>
        <Productcard data = {data[1]} onAdd = {onAdd}/>
        <Productcard data = {data[2]} onAdd = {onAdd}/>
        <Productcard data = {data[3]} onAdd = {onAdd}/>
      </div>
        )
    )

}

