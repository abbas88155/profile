import React from 'react'
import ExText from './ExText'
import ExTop from './ExTop'
import AllEx from './AllEx'
import SingelEx from './SingelEx'

function ExMain() {
  return (
    <div id='expereins'>
        <div className='max-w-[1200px] mx-auto  px-4 mt-16 md:mt-56'>
            <ExText/>
            <ExTop/>
            <SingelEx/>
            <AllEx/>
        </div>
    </div>
  )
}

export default ExMain