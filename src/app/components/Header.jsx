import React from 'react'

const Header = () => {
    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <h1 className="text-black text-4xl font-bold">Manas P.</h1>
            <nav className="space-x-5">
                <a href="#home" className="text-gray-700 hover:text-blue-700">Home</a>
                <a href="#about" className="text-gray-700 hover:text-blue-700">About</a>
                <a href="#projects" className="text-gray-700 hover:text-blue-700">Projects</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-700">Contact Me</a>
            </nav>
        </header>
    )
}

export default Header