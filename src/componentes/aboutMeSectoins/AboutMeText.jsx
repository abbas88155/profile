import React from 'react'
import {fadeIn} from '../../componentes/fremer/variants'
import {motion} from 'framer-motion'
function AboutMeText() {
  return (
    <div className='flex flex-col sm:items-center md:items-start sm:text-center md:text-left  px-8 '>
        <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show' className='sm:text-3xl md:text-4xl text-cyan mb-10 lg:text-5xl font-semibold font-serif'>Über mich</motion.h2>
        <motion.p variants={fadeIn('left', 0.4)} initial='hidden' whileInView='show' className='text-white font-mono text-lg'>Ich bin Abbas Jawadi, ein leidenschaftlicher Front-End-Entwickler mit Sitz in Kabul, Afghanistan.  
        Ich spezialisiere mich auf die Entwicklung moderner, responsiver und benutzerfreundlicher Websites mit aktuellen Webtechnologien wie React, Tailwind CSS und JavaScript.  
       Mein Ziel ist es, visuell ansprechende und funktionale digitale Erlebnisse zu schaffen, die einen bleibenden Eindruck hinterlassen.

       </motion.p>
        <button className='border-cyan border-[0.5px] py-2 px-4 sm:self-center md:self-start hover:bg-orange rounded-full text-lg text-center mt-6 text-white font-serif '>Projekte</button>
    </div>
  )
}

export default AboutMeText