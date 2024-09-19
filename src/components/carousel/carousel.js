import React, { useEffect, useState } from "react";
import "./carousel.css";
import image1 from "../../images/carousel-1.jpg"
import image2 from "../../images/carousel-2.jpg"
import image3 from "../../images/carousel-3.jpg"
import image4 from "../../images/carousel-4.jpeg"
import image5 from "../../images/carousel-5.jpg"
const Carousal = (props)=>{
    const images = [image1, image2, image3, image4, image5];
    const [imageIndex, changeImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            changeImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Update image index every 5 seconds
        }, 4000);

        return () => clearInterval(interval); // Clear interval when component unmounts
    }, [images.length]); 
    return(
        <div className="carousel" style={{backgroundImage: `url(${images[imageIndex]})`, backgroundSize: "100% 100%"}}>
            {props.children}
        </div>
    )
}
export default Carousal;