
import React from 'react'

const AboutPage = () => {
  return (
    <section id="about"
      className="pt-40 md:pt-10 px-6 min-h-screen flex flex-col justify-center items-center 
      bg-gradient-to-bl from-pink-100 via-white to-blue-100">
      <h2 className="text-3xl text-black font-bold text-center mb-6">About Me</h2>
      <p className="text-gray-700 max-w-3xl mx-auto text-center">
        I’m a software developer with a love for building user-friendly web applications.
        Skilled in React, TailwindCSS, and modern web technologies.
      </p>
    </section>
  )
}

export default AboutPage