import React from 'react'

const HomePage = () => {
  return (
    <section
      id='home'
      className='pt-10 md:pt-10 px-6 min-h-screen flex flex-col justify-center items-center 
      bg-gradient-to-br from-blue-100 via-white to-pink-100'
    >

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Image */}
        <div className='md:w-xl'>
          <img
            src='/images/pic.jpg'
            alt='Profile'
            className='h-50 w-50 md:w-70 md:h-70 rounded-full shadow-2xl'
          />
        </div>
        {/* Text */}
        <div className='text-center md:text-left'>
          <h2 className='text-4xl text-black font-bold mb-4 max-w-xl'>Hi, I'm Manas Panwar</h2>
          <h2 className='text-2xl text-black font-bold mb-4 max-w-xl'>Frontend Developer | Expanding into Backend and Cloud</h2>
          <p className='text-gray-500 max-w-xl'>
            Skilled in React, TailwindCSS, and JavaScript, I specialize in building responsive and user-friendly applications.
            I enjoy solving problems, exploring new technologies, and turning ideas into impactful digital experiences.
            Currently learning Node.js and cloud technologies to broaden my skillset.
          </p>
        </div>
      </div>
      <div className='hidden md:mt-30 md:grid  md:grid-cols-3 gap-10 w-full max-w-7xl text-center md:text-left'>
        <div className='space-y-2'>
          <h3 className='text-black font-bold text-lg'>Frontend Development</h3>
          <p className='text-gray-500'>Responsive apps with React and TailwindCSS.</p>
        </div>
        <div className='text-black space-y-2'>
          <h3 className='font-bold text-lg'>Problem Solving</h3>
          <p className='text-gray-500'>Writing clean, efficient and maintainable code.</p>
        </div>
        <div className='text-black space-y-2'>
          <h3 className='font-bold text-lg'>Expanding Skills</h3>
          <p className='text-gray-500'>Learning Node.js & Cloud platforms.</p>
        </div>
      </div>
    </section>
  )
}

export default HomePage
