// import React, {useState, useEffect} from "react";
// import img2 from './images/Slideshow2.jpg'
// import img3 from './images/Slideshow3.jpg'
import img1 from './images/Slideshow1.jpg'


function Slideshow () {
    // const images = [img1, img2, img3]
    // let [index, setIndex] = useState(0);
    // const displayImage = (images) => { return (
    //     <div>
    //         <img src={images[index]} alt = 'img'></img>
    //     </div>)
    // }

    // useEffect(() => { 
    //     function autoSlide () {
    //         if (index === images.length -1) {
    //             setIndex(0);
    //             displayImage(images);
    //         }
    //         else {
    //             setIndex(index + 1);
    //             displayImage(images);
    //         }
    //     }
    //     setInterval(autoSlide, 3000);
    //     displayImage(images)
    // }, [index])
    return (
        <div>
            <img className = "max-w-6xl" src= {img1} alt ='img1'></img>
        </div>
    )
}

export default Slideshow;