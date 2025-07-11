import React, { useState } from 'react'
import NavBarLogo from './NavBarLogo'
import NavBarLinks from './NavBarLinks'
import NavBarBtn from './NavBarBtn'
import { GiHamburgerMenu } from 'react-icons/gi'

function NavBarMain() {
  const [isShow, setIsShow] = useState(false)

  const toggleMenu = () => {
    setIsShow(!isShow)
  }

  return (
    <nav className='max-w-[1200px] w-full mx-auto flex left-[50%] -translate-x-[50%] fixed z-50 items-center'>
      <div className='max-w-[1100px] w-full mx-auto flex justify-between items-center rounded-l-full rounded-r-full p-6 bg-darkGrey mt-3 border-[0.5px] border-orange'>

        <NavBarLogo />

        {/* ✅ ارسال closeMenu به NavBarLinks */}
        <div className={`${isShow ? 'block' : 'hidden'} lg:block`}>
          <NavBarLinks closeMenu={() => setIsShow(false)} />
        </div>

        <NavBarBtn />
      </div>

      {/* دکمه منوی موبایل */}
      <div className='bg-darkGrey rounded-full flex items-center justify-center p-4 border-orange border-[0.5px] lg:hidden'>
        <button onClick={toggleMenu} className='p-2 border-[0.5px] rounded-full border-cyan'>
          <GiHamburgerMenu className='text-white text-lg' />
        </button>
      </div>
    </nav>
  )
}

export default NavBarMain
