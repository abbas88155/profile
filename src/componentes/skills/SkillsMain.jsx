import React from 'react'
import SkillText from './SkillText'
import SkillsAll from './SkillsAll'
import SmailSkills from './SmailSkills'

function SkillsMain() {
  return (
    <div id='skills'>
        <div className='max-w-[1200px] mx-auto px-7 mt-9 mb-9 '>
        <SkillText/>
        <div className=' hidden md:block mt-7'>
        <SkillsAll/>     
        </div>

        <div className='flex items-center justify-center mx-auto md:hidden '>
            <SmailSkills/>
        </div>
           
        </div>
        
    </div>
  )
}

export default SkillsMain