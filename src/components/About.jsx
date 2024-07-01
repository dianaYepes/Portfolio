import React from 'react'
import {styles} from '../styles'
import my_pic from '../assets/snake_holder.png';
import python from '../assets/python.png'
import script from '../assets/javascript.png'
import sql from '../assets/sql.png'
import git from '../assets/git.png'
import reactlog from '../assets/react.png'
import node from '../assets/nodejs.png'
import mongo from '../assets/mongo-db.png'
import me from "../assets/me.png"
import { Image } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';


const styling = 'w-16 h-16 md:w-20 md:h-20';

const About = () => {


  return (
    <div className='mt-48'>
      <div className='flex flex-col lg:flex-row justify-around'>
        <div className='flex flex-col'>
          <h2 className={`${styles.sectionHeadText}`}>Quick Intro</h2>
          <p className='text-secondary mt-5 text-[17px] max-w-xl leading-[30px]'>
            To begin with, my name is Diana Yepes.
            I first became interested in programming when I was teaching at an online STEM camp for elementary age children, a job I only obtained in order to pay for my college tuition.  Ironically, I was teaching 11-year olds how to code in Python before I myself knew how. 
            But, with this rather unusual introduction, I stepped into the world of programming.  From then on, I did my best to obtain technology related work, so that I could both get myself through college, and also gain valuable experience. Two birds, one stone!
            And as you can guess, I was able to graduate (proud first-gen!) and learn a lot through my work and project experiences!
          </p>
        </div>

        <div className='flex flex-col mt-5 lg:w-1/2 items-center'>
          <h3 className='mypicheader'> 
            This is Actually Me
          </h3>
          <div className='flex mt-5'>
            <img src={me} alt="me" className="w-80 object-contain rounded-md md:opacity-30 hover:opacity-90"/>
          </div>
        </div>
      </div>


<div className='mt-36 flex flex-wrap justify-center md:justify-start gap-4 md:gap-6'>
  <img src={script} className={styling} alt='JavaScript logo' />
  <img src={python} className={styling} alt='Python logo' />
  <img src={reactlog} className={styling} alt='React logo' /> 
  <img src={sql} className={styling} alt='SQL logo' />
  <img src={git} className={styling} alt='Git logo' />
  <img src={mongo} className={styling} alt='MongoDB logo' />
  <img src={node} className={styling} alt='Node.js logo' />
</div>
    </div>
  )
}

export default About

