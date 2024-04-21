import React, { useRef } from 'react'
import './WorkExperience.css'
import {WORKS_EXPERIENCE}  from "../../utils/data"
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from 'react-slick'

const WorkExperience = () => { 
    const slideref = useRef(); 
    const settings ={
        dots: false,
        infinite:true,
        speed:500,
        slidesToShow:2,
        arrows:false,
        responsive:[
            {
                breakpoint:769,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ],
    };

    const slideRight =()=> {
        slideref.current.slickNext();
    };

    const slideLeft =()=> {
        slideref.current.slickPrev();
    };


  return (
<section className="experience-container">
    <h5>Work Experience</h5>
    <div className="experience-content">

        <div className="arrow-right" onClick={slideRight}> 
        <span className="material-symbols-outlined">
        r
        </span>
        </div>

        <div className="arrow-left" onClick={slideLeft}>
        <span className="material-symbols-outlined">
           l
        </span>
        </div>

        <Slider ref={slideref} {...settings}>
        {WORKS_EXPERIENCE.map((item)=>(
            <ExperienceCard key= {item.title} details={item}/>
        ))}
        </Slider>
    </div>
</section>
  )
}

export default WorkExperience;
