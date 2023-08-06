import React from 'react'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>

         <motion.div className='text-container'
            initial={{opacity: 0, scale: 0.3}}
            animate={{ y: [200], opacity: 1, scale: 1 }}
            whileInView={{opacity:1,y:0}}
            transition={{duration: 5,
              delay: 0.2,
              }}
            viewport={{once:true}}
            
            >
        <form method="POST" action="https://getform.io/f/377bb29d-f1fc-46b5-8820-96de191f7d71" className='flex flex-col max-w-[600px] w-full h-full'>
          <div className='md:text-center sm:text-right pb-8'>
            <p className='text-gray-300 text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - thaeeii16@gmail.com</p>
          </div>
          <input type="text" className='bg-[#ccd6f6] p-2'  name='name' placeholder='Name' />
          <input type="email" className="bg-[#ccd6f6] my-4 p-2" name="email" placeholder='Email' />
          <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
        </motion.div>
      </div>
    
  )
}

export default Contact
