import React from 'react'
import FotterRight from './FotterRight'
import FotterLeft from './FotterLeft'

function FotterMain() {
  return (
    <div className='w-full mt-10  '>
        <div className='w-full border-[1px] border-lightGrey/50 h-[1x] '></div>
       <div>
        <div className='flex items-start justify-between px-14 bg-lightGrey/25 mt-4 h-28'>
        <FotterLeft/>
        <FotterRight/>  
        </div>
        
       </div>
    </div>
  )
}

export default FotterMain