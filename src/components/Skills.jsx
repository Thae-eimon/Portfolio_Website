import React from 'react'

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import php from '../assets/php.png';
import mysql from '../assets/mysql.png'
import {motion} from 'framer-motion'

const Skills = () => {
  return (
    
    <div name="skills"  className='w-full h-screen   bg-[#0a192f] text-gray-300'>
       <motion.div className='text-container'
    initial={{opacity: 0, scale: 0}}
    animate={{ y: [50, 150, 50], opacity: 1, scale: 1 }}
    whileInView={{opacity:1,y:0}}
    transition={{duration: 4,
      delay: 0.2,
    }}
    viewport={{once:true}}
    
    >
        {/* container */}
        <div className='w-full h-full max-w-[1300px] mx-auto p-3 flex flex-col justify-center '>
        
        <div className='md:text-center sm:text-right pb-8 pl-4 '>
                <p className='text-4xl  font-bold inline border-b-4 border-pink-600 '>Skills</p>
               
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt="html icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt="css icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={javascript} alt="html icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="react icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={github} alt="github icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={php} alt="php icon" />
                    <p className='my-4'>PHP</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={mysql} alt="mysql icon" />
                    <p className='my-4'>MYSQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tailwind} alt="tailwind icon" />
                    <p className='my-4'>TAILWIND</p>
                </div>
            </div>
            
        </div>
        </motion.div>
    </div>
    
  )
}

export default Skills
