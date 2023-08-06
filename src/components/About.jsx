import React  from 'react'
import { motion } from 'framer-motion'




const About = () => {

    
  return (
    
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className="w-full h-full flex flex-col justify-center items-center">
        <motion.div className='text-container'
            initial={{opacity: 0, scale: 0.2}}
            animate={{ y: [300], opacity: 1, scale: 1 }}
            whileInView={{opacity:1,y:0}}
            transition={{duration: 4,
              delay: 0.2,
              }}
            viewport={{once:true}}
            
            >

            <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Thae, nice to meet you. Please take a look around. </p>
                    </div>
                    <div>
                        <p>I'm a front-end developer driven by a passion for creating elegant and user-friendly web experiences. With a solid foundation in HTML, CSS, and JavaScript. Good hands-on experience
                            and knowledge of React.Js, CSS framework like Bootstrap. I strive to contribute innovative solutions and bring designs to life. Through my strong attention to detail and dedication to continuous learning, I aim to grow and collaborate with experienced professionals to deliver high-quality projects that leave a lasting impact.</p>
                    </div>
            </div>
            </motion.div>
            </div>
        </div>
    
  )
}

export default About
