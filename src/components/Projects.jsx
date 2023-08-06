import React from 'react'
import Traveltales from '../assets/traveltales.png'
import vegoina from '../assets/vegonia.png'
import Plannco from '../assets/plannco.jpg'
import Sushi from '../assets/sushi.png'
import Guess from '../assets/guess.png'
import Dashboard from '../assets/dashboard.png'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'

const defaultOptions = {
	reverse:        true,  
	max:            30,     
	perspective:    1000,  
	scale:          1,    
	speed:          1000,   
	transition:     true,   
	axis:           null,   
	reset:          true,    
	easing:         "cubic-bezier(.03,.98,.52,.99)",    
}


const Projects = () => {
  return (

    
    
    <div name="project" id='projects' className='w-full md:h-screen lg:h-screen  bg-[#0a192f] text-gray-300 '>
        <div className='w-full h-full max-w-[1300px]  mx-auto p-4 pb-10 flex flex-col justify-center '>
        <motion.div className='text-container'
            initial={{opacity: 0, scale: 0.2}}
            animate={{ x: [-100], opacity: 1, scale: 1 }}
            whileInView={{opacity:1,x:0}}
            transition={{duration: 5,
              delay: 0.2,
              }}
            viewport={{once:true}}
            
            >
            <div className='md:text-center sm:text-right pb-8 pl-4 '>
                <p className='text-4xl  font-bold inline border-b-4 border-pink-600 '>Projects</p>
                <p className='text-gray-400 py-6 '>Most recent work</p>
            </div>

           
            <div  className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-3 md:gap-y-6 '>



                {/* Grid Item */} 
                
                <Tilt options={defaultOptions}>
                <div style={{backgroundImage : `url(${Plannco})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    
                    <div className='opacity-0 transition duration-500 group-hover:opacity-100 '>
                        <span className='text-2xl text-center font-bold flex justify-center items-center text-pink-400 tracking-wider'> 
                         Home Decoration Website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Thae-eimon/HomeDecorLandingPage" target='_blank'>
                                <button className='bg-white text-gray-600 text-lg font-bold text-center rounded-md hover:bg-pink-600 hover:text-white px-4 py-2 m-2 '>Source Code</button>
                            </a>
                            <a href="https://homdecorlandingpage.netlify.app" target='_blank'>
                                <button className='bg-white text-gray-600 text-lg font-bold text-center rounded-md hover:bg-pink-600 hover:text-white px-4 py-2 m-2 '>See Live</button>
                            </a>
                        </div>
                    </div>
                </div>
                </Tilt>

                <Tilt options={defaultOptions}>
                <div style={{backgroundImage : `url(${Traveltales})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-center font-bold flex justify-center items-center text-pink-400 tracking-wider'> 
                         React Travel Template 
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Thae-eimon/react_travel_template">
                                <button className='bg-white text-gray-600 text-lg font-bold text-center rounded-md  hover:bg-pink-600 hover:text-white px-4 py-2 m-2 '>Source Code</button>
                            </a>
                            <a href="https://traveltales.netlify.app/" target='_blank'>
                                <button className='bg-white text-gray-600 text-lg font-bold text-center rounded-md hover:bg-pink-600 hover:text-white px-4 py-2 m-2 '>See Live</button>
                            </a>
                        </div>
                    </div>
                </div>
                </Tilt>

                <Tilt options={defaultOptions}>
                <div style={{backgroundImage : `url(${vegoina})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl text-center font-bold flex justify-center items-center text-pink-400 tracking-wider'> 
                         University Website Template
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Thae-eimon/UniversityTemplate">
                                <button className='bg-white text-gray-600 text-lg font-bold text-center rounded-md hover:bg-pink-600 hover:text-white px-4 py-2 m-2 '>Source Code</button>
                            </a>
                            <a href="https://universitytemplatedesign.netlify.app/" target='_blank'>
                                <button className='bg-white text-gray-600 text-lg font-bold text-center rounded-md hover:bg-pink-600 hover:text-white px-4 py-2 m-2 '>See Live</button>
                            </a>
                        </div>
                    </div>
                </div>
                </Tilt>

                <Tilt options={defaultOptions} >
                <div style={{backgroundImage : `url(${Sushi})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-center font-bold flex justify-center items-center text-pink-400 tracking-wider'> 
                         Sushi Website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Thae-eimon/Food_Website">
                                <button className='bg-white text-gray-600 text-lg font-bold text-center rounded-md hover:bg-pink-600 hover:text-white px-4 py-2 m-2 '>Source Code</button>
                            </a>
                            <a href="https://sushisite.netlify.app/" target='_blank'>
                                <button className='bg-white text-gray-600 text-lg font-bold text-center rounded-md hover:bg-pink-600 hover:text-white px-4 py-2 m-2 '>See Live</button>
                            </a>
                        </div>
                    </div>
                </div>
                </Tilt>
              
                <Tilt options={defaultOptions} >
                <div style={{backgroundImage : `url(${Guess})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-center font-bold flex justify-center items-center text-pink-400 tracking-wider'> 
                         JavaScript Number Guess 
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Thae-eimon/NumberGuesswithVoiceCommand">
                                <button className='bg-white text-gray-600 text-lg font-bold text-center rounded-md hover:bg-pink-600 hover:text-white px-4 py-2 m-2 '>Source Code</button>
                            </a>
                            <a href="https://numberguesswithvocicecommand.netlify.app/" target='_blank'>
                                <button className='bg-white text-gray-600 text-lg font-bold text-center rounded-md hover:bg-pink-600 hover:text-white px-4 py-2 m-2 '> See Live</button>
                            </a>
                        </div>
                    </div>
                </div>
                </Tilt>
                
                <Tilt options={defaultOptions} >
                <div style={{backgroundImage : `url(${Dashboard})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-center font-bold flex justify-center items-center text-pink-400 tracking-wider'> 
                         JavaScript Number Guess 
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Thae-eimon/AdminTemplate/">
                                <button className='bg-white text-gray-600 text-lg font-bold text-center rounded-md hover:bg-pink-600 hover:text-white px-4 py-2 m-2 '>Source Code</button>
                            </a>
                            <a href="https://magenta-dashboard.netlify.app/" target='_blank'>
                                <button className='bg-white text-gray-600 text-lg font-bold text-center rounded-md hover:bg-pink-600 hover:text-white px-4 py-2 m-2 '> See Live</button>
                            </a>
                        </div>
                    </div>
                </div>
                </Tilt>
              
            </div>
           </motion.div>
        </div>
    </div>

    
  )
}



export default Projects
