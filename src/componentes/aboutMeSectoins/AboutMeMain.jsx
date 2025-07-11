import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMeImg from './AboutMeImg'

function AboutMeMain() {
  return (
    <div id='about' className='flex sm:flex-col md:flex-row max-w-[1200px] mx-auto items-center justify-between mt-24 px-9 '>
       
       <div>
        <AboutMeText/>
        </div> 
        <div>
     <AboutMeImg/>
        </div>
       
    </div>
  )
}

export default AboutMeMain