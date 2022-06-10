


function Slideshow ({image}) {
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
            <img className = "max-w-6xl my-4 object-center" src= {image} alt ='img1'></img>
        </div>
    )
}

export default Slideshow;