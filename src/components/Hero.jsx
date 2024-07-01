import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {ComputersCanvas} from './canvas'
import {useTypewriter} from 'react-simple-typewriter'

import me from "../assets/me.png"


const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: ["a First-Gen Graduate!","a Latina in Tech!","a great learner!"],
    loop:true,
    autostart:true,
    typeSpeed: 70   
  })
  
  return (
    <section className=' relative w-full mx-auto h-screen '>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div>
            <h1 className={`${styles.heroHeadText}`}>Welcome, <p className='font-mono'>I'm Diana</p></h1>
            <p className={`${styles.heroSubText} mt-2`}>I'm a Software Engineer <br></br> But I'm also <br></br><span className={`${styles.heroSubText}`}>{typeEffect}</span></p>
          </div>
        </div>
        <ComputersCanvas/>
    </section>
  )
}

export default Hero
