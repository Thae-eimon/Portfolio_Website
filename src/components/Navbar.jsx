import React, {useState} from 'react'
import {FaBars,FaTimes, FaGithub,FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import logo from '../assets/logo.png'
import { Link } from 'react-scroll';
import Resume from '../assets/CV.png'


const Navbar = () => {

  const [nav,setNav] = useState(false)

  const handleClick = () =>{
      setNav(!nav);
  }

  return (
    <div className='w-full h-[80px] bg-[#0a192f] text-gray-300  fixed flex justify-between px-4 items-center md:shadow-md '>
        <div>
            <img src={logo}  alt="logo img" style={{width:'130px', height:'80px'}} />
        </div>
       
       {/* menu */}
            <ul className='hidden md:flex '>
              <li className='nav-link'>
              <Link  to="home"  smooth={true} duration={500} >
              Home
              </Link>
              </li>
              <li className='nav-link'>
              <Link  to="about"  smooth={true} duration={500} >
              About
              </Link>
              </li>
              <li className='nav-link'>
              <Link  to="skills"  smooth={true} duration={500} >
              Skills
              </Link>
              </li>
              <li className='nav-link'>
              <Link  to="projects"  smooth={true} duration={500} >
              Projects
              </Link>
              </li>
              <li className='nav-link'>
              <Link  to="contact"  smooth={true} duration={500} >
              Contact
              </Link>
              </li>
           </ul>
        
        {/* Hambutger */}
        <div onClick={handleClick} className='md:hidden z-10 text-3xl'>
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobiel Menu */}
        <ul className={!nav ? 'hidden' : 'w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center absolute top-0 left-0'}>
              <li className='py-6 text-4xl '>
              <Link onClick={handleClick}  to="home"  smooth={true} duration={500} >
              Home
              </Link>
              </li>
              <li className='py-6 text-4xl '>
              <Link onClick={handleClick}  to="about"  smooth={true} duration={500} >
              About
              </Link>
              </li>
              <li className='py-6 text-4xl '>
              <Link onClick={handleClick} to="skills"  smooth={true} duration={500} >
              Skills
              </Link>
              </li>
              <li className='py-6 text-4xl '>
              <Link onClick={handleClick}  to="projects"  smooth={true} duration={500} >
              Projects
              </Link>
              </li>
              <li className='py-6 text-4xl '>
              <Link onClick={handleClick} to="contact"  smooth={true} duration={500} >
              Contact
              </Link>
              </li>
           </ul>

        {/* social icons */}
        <div className='hidden lg:flex flex flex-col fixed top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] bg-blue-600  flex justify-between items-center ml-[-110px] hover:ml-[-5px] px-3 duration-300'>
              <a className='w-full text-gray-300 text-xl flex justify-between items-center' href="https://www.linkedin.com/in/thae-ei-mon-8384ba22b/" target='_blank'>Linkedin <FaLinkedin size={30} /></a>
            </li>
            <li className='w-[160px] h-[60px] bg-[#333] flex justify-between items-center ml-[-110px] hover:ml-[-5px] px-3 duration-300'>
              <a className='w-full text-gray-300 text-xl flex justify-between items-center' href="https://github.com/Thae-eimon" target='_blank'>Github <FaGithub size={30} /></a>
            </li>
            <li className='w-[160px] h-[60px] bg-[#32a352] flex justify-between items-center ml-[-110px] hover:ml-[-5px] px-3 duration-300'>
              <a className='w-full text-gray-300 text-xl flex justify-between items-center' href="mailto: thaeeii16@gmail.com" target='_blank'>Email <HiOutlineMail size={30} /></a>
            </li>
            <li className='w-[160px] h-[60px] bg-[#f79001] flex justify-between items-center ml-[-110px] hover:ml-[-5px] px-3 duration-300'>
              <a className='w-full text-gray-300 text-xl flex justify-between items-center' href={Resume} >Resume <BsFillPersonLinesFill size={30} /></a>
            </li>

          </ul>
        </div>
    </div>
  )
}

export default Navbar