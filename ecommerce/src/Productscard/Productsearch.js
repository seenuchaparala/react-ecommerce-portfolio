import React from "react";
import { useState, useEffect } from "react";
import Productcard from "./Productcard";

export default function Productsearch ({query}) {

    // const [query, setQuery] = useState("sale")
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Host': 'apidojo-forever21-v1.p.rapidapi.com',
              'X-RapidAPI-Key': '78bed3a4a8mshbf6e6f99e1ad1a5p14e1ddjsn26dbe05350e0',
            },
          };
          const url = `https://apidojo-forever21-v1.p.rapidapi.com/products/search?query=${query}&rows=4&start=0&color_groups=black`;
          fetch(url, options)
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoading(false)
                    setData(result.response.docs)
        
                })
            },[query])

            console.log(data)

    return (
        isLoading ? (
            <div><h1>LOADING!!!!</h1></div>
        ) : (
            <div className='grid md:grid-cols-4 gap-8 my-5 mx-0 max-w-6xl'>
        <Productcard {...data[0]}/>
        <Productcard {...data[1]}/>
        <Productcard {...data[2]}/>
        <Productcard {...data[3]}/>
      </div>
        )
    )

}