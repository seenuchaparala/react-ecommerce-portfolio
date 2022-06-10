import React from "react";
import Slideshow from "../Components/Slideshow/Slideshow";
import image from "../Components/Slideshow/images/aboutus.jpg"


function Aboutus() {
    return (
        <div className="my-0 mx-auto flex flex-col justify-center max-w-xl">
            <Slideshow image = {image}/>
            <h2 className="font-serif text-center text-xl my-2">ABOUT US</h2>
            <blockquote className="font-serif italic">"FOREVER 21 is a fashion industry leader making the latest trends accessible to all while inspiring unique style and confidence. With a renewed focus on the customer experience, the brand offers high style designs and fashion basics with compelling values and a dynamic store environment. While driving innovation across e-commerce and digital to expand access and convenience, the brand continues to strengthen its positioning as today’s preferred destination for the fashionable consumer. Forever 21 is located in more than 540 locations globally and online."</blockquote>
        </div>
    )
}

export default Aboutus;