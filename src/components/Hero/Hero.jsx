import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2> Créer des expériences utilisateur inspirantes et uniques.</h2>
            <p> Développeur web passionné du Frontend | Transformant des concepts en solutions web fluides et esthétiquement remarquables</p>
        </div>

        <div className='hero-img'>
            <div>
            <div className='tech-icon'>
                <img className='un' src='./assets/images/React-icon.svg.png'/>
            </div>
                <img className='deux'src='./assets/images/moi.png'/>
            </div>
            <div>
                <div className='tech-icon'>
                     <img  className='html1' src="./assets/images/html.png" alt="" />
                </div>
                <div className='tech-icon'>
                     <img  className='html' src="./assets/images/css.png" alt="" />
                </div>
                <div className='tech-icon'>
                     <img  className='html' src="./assets/images/js.png" alt="" />
                </div>
            </div>
        </div>

        </section>
  )
}

export default Hero
