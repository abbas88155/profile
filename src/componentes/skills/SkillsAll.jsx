import React from 'react'
import { DiJavascript } from 'react-icons/di'
import { FaBootstrap, FaCss3, FaHtml5, FaReact } from 
'react-icons/fa'

import { SiTailwindcss } from 'react-icons/si'
import SkillsSingel from './SkillsSingel'
const skills = [
    {skill:'HTML',icon:FaHtml5},
    {skill:'CSS',icon:FaCss3},
    {skill:'BOOTSTRAP',icon:FaBootstrap},
    {skill:'JAVASCRIPT',icon:DiJavascript},
    {skill:'TAILWINDCSS',icon:SiTailwindcss},
    {skill:'REACT',icon:FaReact},
]
function SkillsAll() {
  return (
    <div className='flex  items-center justify-center relative gap-2 max-w-[1200px] mx-auto mb-10'>
        
           {skills.map((item, i)=>{
            return <SkillsSingel key={i} text={item.skill} imgSvg={<item.icon/>} />
           })}
    
        
    </div>
  )
}

export default SkillsAll