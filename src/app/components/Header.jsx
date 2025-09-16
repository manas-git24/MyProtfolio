import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Header = () => {
    return (
        <header className='fixed shadow-xs bg-white/30 backdrop-blur-md w-full'>
            <div className='flex justify-between items-center px-6 py-4'>
                <h1 className='text-black text-4xl font-serif'>Manas P.</h1>
                <nav className='space-x-6  hidden md:flex'>
                    {/* Text links */}
                    <a href='#home' className='text-gray-700 hover:text-blue-700 transition transform hover:scale-110'>Home</a>
                    <a href='#about' className='text-gray-700 hover:text-blue-700 transition transform hover:scale-110'>About Me</a>
                    <a href='#projects' className='text-gray-700 hover:text-blue-700 transition transform hover:scale-110'>Projects</a>
                    {/* <a href='#contact' className='text-gray-700 hover:text-blue-700'>Contact Me</a> */}
                    <a href='#resume' className='text-gray-700 hover:text-blue-700 transition transform hover:scale-110'>Resume</a>
                    {/* Icon links */}
                    <a href='https://www.linkedin.com/in/manas-panwar-05343b252/' target='_blank' rel='noopener noreferrer'
                        className='text-gray-700 hover:text-blue-700 text-xl transition transform hover:scale-110 inline-flex items-center'><FaLinkedin /></a>
                    <a href='https://github.com/manas-git24' target='_blank' rel='noopener noreferrer'
                        className='text-gray-700 hover:text-blue-700 text-xl transition transform hover:scale-110 inline-flex items-center'><FaGithub /></a>
                    <a href='mailto:manaspanwar24@gmail.com' rel='noopener noreferrer'
                        className='text-gray-700 hover:text-blue-700 text-xl transition transform hover:scale-110 inline-flex items-center'><FaEnvelope /></a>
                </nav>
            </div>
        </header>
    )
}

export default Header
