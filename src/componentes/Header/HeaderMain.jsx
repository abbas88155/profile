import React from 'react'
import HeaderText from './HeaderText'
import HeaderImg from './HeaderImg'
import HeaderBg from './HeaderBg'

function HeaderMain() {
  return (
    <>
    <div className='pt-40 pb-6 max-w-[1200px] mx-auto px-4'>
      <div className='flex sm:flex-col md:flex-row items-center justify-between px-9 '>
        <HeaderText/>
      <HeaderImg/> 
      </div>
      <HeaderBg/>
    </div>
    </>
  )
}

export default HeaderMain