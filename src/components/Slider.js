import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const slides= [
    {image: require("../imgs/residential/2.jpg"), slug: "residential-construction", header: "Creating Homes", body: "Trust us to take your idea from blueprint to a full masterpiece. We turn your dreams into reality with unmatched craftsmanship and precision. "},
    {image: require("../imgs/commercial/3.jpg"), slug: "commercial-construction", header: "Commercial Construction", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cupiditate quae ad ipsam id amet eos, labore suscipit! Itaque cupiditate quae ad."},
    {image: require("../imgs/road/1.jpg"), slug: "road-construction", header: "Road Construction", body: "Every project is unique and we have custom solutions for every case brought to our table. We give modern day solutions to modern day problems."},
    {image: require("../imgs/borehole-drilling/2.jpg"), slug: "borehole-drilling", header: "Borehole Drilling", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cupiditate quae ad ipsam id amet eos, labore suscipit! Itaque cupiditate quae ad."},
    {image: require("../imgs/goods/img7.jpg"), slug: "goods", header: "Goods", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cupiditate quae ad ipsam id amet eos, labore suscipit! Itaque cupiditate quae ad."},
    {image: require("../imgs/consultancy/1.jpg"), slug: "consultancy", header: "Consultancy", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cupiditate quae ad ipsam id amet eos, labore suscipit! Itaque cupiditate quae ad."},
]

const Slider = () => {

    const [activeSlide, setActiveSlide] = useState(0)

    const onNext = () => {
        setActiveSlide(activeSlide + 1)
        if(activeSlide >= slides.length - 1){
            setActiveSlide(0)
        }
    }

    const onPrev = () => {
        setActiveSlide(activeSlide - 1)
        if(activeSlide <= 0){
            setActiveSlide(slides.length - 1 )
        }
    }
    
    // refreshInterval = setInterval(()=> {
    //     next.click();
    // }, 5000)

    useEffect(()=>{

    }, [activeSlide])
    return (
        <div className="slider">
            <div className="list">
            <div className="item active">
                    <img src={slides[activeSlide].image} alt=""/>
                    <div className="content">
                        <h2>{slides[activeSlide].header}</h2>
                        <p>
                            {slides[activeSlide].body.slice(0, 150)}
                        </p>
                        <Link className="page-btn" to={`/services/${slides[activeSlide].slug}`}>Learn More</Link>
                    </div>
                </div>
            </div>

            <div className="arrows">
                <button id="prev" onClick={onPrev}>&lt;</button>
                <button id="next" onClick={onNext}>&gt;</button>
            </div>

            <div className="thumbnail">
                {slides.map((slide, slideIndex)=>(
                    <div className={`item ${slideIndex === activeSlide && "active"}`} key={slideIndex} onClick={() => setActiveSlide(slideIndex)}>
                        <img src={slides[slideIndex].image} alt=""/>
                        <div className="content">
                            <span>{slides[slideIndex].header}</span>
                        </div>
                    </div> 
                ))}
            </div>
        </div>
    )
}

export default Slider