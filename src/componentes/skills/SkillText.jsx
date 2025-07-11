import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../componentes/fremer/variants'

function SkillText() {
  return (
    <div className='flex flex-col items-center justify-center mt-[100px]'>
      <motion.h2 variants={fadeIn('up', 0.1)} initial='hidden' whileInView='show' className='text-cyan font-serif text-4xl '>Meine Fähigkeiten</motion.h2>
      <motion.p variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show' className='font-sans text-white  mt-5'>
      Mit soliden Kenntnissen in HTML, CSS und JavaScript entwickle ich saubere und responsive Benutzeroberflächen.  
      Ich nutze Frameworks wie Bootstrap und TailwindCSS, um die Entwicklung zu beschleunigen,  
      und React.js, um dynamische und interaktive Interfaces zu erstellen.

      </motion.p>
    </div>
  )
}

export default SkillText