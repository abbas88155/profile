import React from 'react'
import { Link } from 'react-scroll'

function NavBarLinks({ closeMenu }) {
  const links = [
    { link: 'Über mich', section: 'about' },
    { link: 'Fähigkeiten', section: 'skills' },
    { link: 'Erfahrung', section: 'expereins' },
    { link: 'Projekte', section: 'projects' },
    { link: 'Kontakt', section: 'contact' },
  ]


  const handleClick = () => {
    if (closeMenu) closeMenu()
  }

  return (
    <div>
      <ul className='flex flex-col sm:flex-col lg:flex-row items-center justify-between gap-4 font-medium w-full lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] text-center bg-cyan lg:bg-darkGrey px-4 py-2 rounded-md shadow-md sm:rounded-none sm:shadow-none '>
        {links.map((link, index) => (
          <li key={index} className='group cursor-pointer'>
            <Link
              className='text-white sm:hover:text-orange lg:hover:text-cyan transition-colors duration-300'
              to={link.section}
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              onClick={handleClick}
            >
              {link.link}
            </Link>
            <div className='w-0 mx-auto group-hover:w-full h-[2px] bg-white sm:bg-orange lg:bg-cyan transition-all duration-500'></div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBarLinks
