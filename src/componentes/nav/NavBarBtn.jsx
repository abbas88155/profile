import React from 'react'
import { LuArrowDownRight } from 'react-icons/lu'

function NavBarBtn() {
  return (
    <div>
        <button className='rounded-full border-orange border-[0.5px] px-4 py-2 bg-gradient-to-r from-cyan to-orange text-white font-medium hover:scale-110 hover:border-cyan transition-all duration-500 flex items-center'>
             Hier ich
            <LuArrowDownRight/>
        </button>
    </div>
  )
}

export default NavBarBtn