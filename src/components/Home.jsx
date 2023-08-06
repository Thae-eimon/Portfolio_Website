import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll'
import {motion} from 'framer-motion'




const Home = () => {
  return (
    
      
    <div name="home" className='w-full h-screen bg-[#0a192f] position-relative '>
        {/* container */}
        <div className='max-w-[1000px] mx-auto h-full  flex flex-col justify-center px-8   '>
        
        <motion.div className='text-container'
            initial={{opacity: 0, scale: 0.3}}
            animate={{ x: [150,50,100], opacity: 1, scale: 1 }}
            whileInView={{opacity:1,x:0}}
            transition={{duration: 4,
              delay: 0.2,
              
            }}
            viewport={{once:true}}
            
            >
          <p className='text-pink-600 mb-2'>Hi, my name is</p>
          <h1 class="text-4xl sm:text-7xl font-bold ">
                        
            <span class="title-word title-word-1">Thae</span>
            <span class="title-word title-word-2"> Ei </span>
            <span class="title-word title-word-3"> Mon </span>
                
          </h1>
          <h4 className='text-lg sm:text-7xl font-semibold text-[#8892b0]'>I'm a frontend Developer</h4>
          <p className='max-w-[700px] text-[#8892b0] py-4 mb-2 '>I'm a frontend developer with a passion for creating immersive and dynamic user experiences.  I am dedicated to continuously learning and collaborating with experienced developers to deliver innovative and visually stunning web applications.</p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
            <span className='group-hover:rotate-90 duration-300'>
            <a href="/projects" >
            <HiArrowNarrowRight className='ml-3' />
            </a>
            </span> 
            </button>
          </div>
</motion.div>
       
        </div>
    </div>
   
    
  )
}

export default Home
