import React from 'react'
import ProjectText from './ProjectText'
import SingelProject from './SingelProject'
const projects = [
  {
    name: 'Store',
    year: '2024',
    link: '#',
    img: '/profile/images/website-img-1.jpg',
  },
  {
    name: 'Movies App',
    year: '2025',
    link: '#',
    img: '/profile/images/website-img-3.jpg',
  },
  {
    name: 'Image Gallery',
    year: '2025',
    link: '#',
    img: '/profile/images/website-img-2.webp',
  },
  {
    name: 'Portfolio',
    year: '2025',
    link: '#',
    img: '/profile/images/website-img-4.jpg',
  },
]

function ProjectMain() {
  return (
    <div id="projects" className="py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <ProjectText />
        <div className="flex flex-col gap-16 mt-7">
          {projects.map((item, index) => (
            <SingelProject
              key={index}
              {...item}
              side={index % 2 === 0 ? 'right' : 'left'}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectMain
