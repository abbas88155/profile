import React from 'react'
import { DiJavascript } from 'react-icons/di'
import { FaBootstrap, FaCss3, FaHtml5, FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import {motion} from 'framer-motion'
import { fadeIn } from '../../componentes/fremer/variants'
const skills = [
    {skill:'HTML',icon:FaHtml5},
    {skill:'CSS',icon:FaCss3},
    {skill:'BOOTSTRAP',icon:FaBootstrap},
    {skill:'JAVASCRIPT',icon:DiJavascript},
    {skill:'TAILWINDCSS',icon:SiTailwindcss},
    {skill:'REACT',icon:FaReact},
]
function SmailSkills() {
  return (
    <div>
        <div>
            <div  className='grid md:grid-cols-4 sm:grid-cols-3 gap-12 my-12 mx-auto'>
                {skills.map((item,index)=>{
                    return(
                        <motion.div 
                         variants={fadeIn('up', 0.1)}
                                  initial="hidden"
                                  whileInView="show"
                                  viewport={{ once: true, amount: 0.5 }}
                        key={index} className='flex flex-col items-center justify-between '>
                            <item.icon className='text-orange text-4xl hover:scale-110 hover:text-cyan'/>
                            <p className='text-cyan text-sm mt-2'>{item.skill}</p>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default SmailSkills