import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from "react-icons/hi"
import CountUp from "react-countup"
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-wrapper">
          <div className="innerWidth flexCenter hero-container">

               <div className="flexColStart hero-left">
                    <div className="hero-title">
                         <motion.div 
                         initial={{y: "-4rem", opacity: 0}}
                         animate={{y:"0", opacity: 1}}
                         transition={{duration: 4, type: "spring"}}
                         className="red-circle"></motion.div>
                         <motion.h1
                         initial={{y: "4rem", opacity: 0}}
                         animate={{y:"0", opacity: 1}}
                         transition={{duration: 4, type: "spring"}}>
                              Nosso <br />
                              Negócio é<br /> A Própria Vida
                         </motion.h1>
                    </div>

                    <div className="flexColStart hero-description">
                         <span className='hero-descriptionText'>Comprometimento. Honestidade. Integridade.</span>
                         <span className='hero-descriptionText'>A saúde que você busca com o respeito que merece.</span>
                    </div>

                    <div className="flexCenter search-bar">
                         <HiLocationMarker color="rgb(209, 2, 2)" size={25}/>
                         <input type="text" />
                         <button className="button">Procurar</button>
                    </div>

                    <div className="flexCenter stats">
                         <div className="flexColCenter stat">
                              <span>
                                   <CountUp start={8800} end={9000} duration={4} />
                                   <span>+</span>
                              </span>
                              <span className='secondaryText'>
                                   Produtos exclusivos
                              </span>
                         </div>

                         <div className="flexColCenter stat">
                              <span>
                                   <CountUp start={199800} end={200000} duration={4} />
                                   <span>+</span>
                              </span>
                              <span className='secondaryText'>
                                   Clientes satisfeitos
                              </span>
                         </div>

                         <div className="flexColCenter stat">
                              <span>
                                   <CountUp end={28} duration={4} />
                                   <span>+</span>
                              </span>
                              <span className='secondaryText'>
                                   Prêmios medicinais
                              </span>
                         </div>
                    </div>
               </div>

               {/* right section */}

               <div className="flexCenter hero-right">
                    <motion.div 
                    initial={{x: "14rem", opacity: 0}}
                    animate={{x:"0", opacity: 1}}
                    transition={{duration: 4, type: "spring"}}
                    className="image-container">
                         <img className='hero-image' src="./1.webp" alt="" />
                    </motion.div>
               </div>
          </div>
    </section>
  )
}

export default Hero