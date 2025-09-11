import React from 'react'

const ProjectsPage = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <h2 className="text-3xl text-black font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Project 1</h3>
          <p className="text-gray-700">Description of project 1.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Project 2</h3>
          <p className="text-gray-700">Description of project 2.</p>
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage