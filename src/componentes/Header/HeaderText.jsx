import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../../componentes/fremer/variants'
function HeaderText() {
  return (
    <div className='flex flex-col sm:text-center md:text-left px-7 gap-3'>
      <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show' className='font-bold font-special sm:text-xl md:text-2xl text-cyan uppercase'>Front-End-Webentwickler</motion.h2>
      <motion.h1 variants={fadeIn('up', 0.4)} initial='hidden' whileInView='show' className='font-extrabold text-orange sm:text-4xl md:6xl capitalize'>abbas jawadi</motion.h1>
      <motion.p variants={fadeIn('up', 0.6)} initial='hidden' whileInView='show' className='font-bold text-white capitalize '>Ich bin Abbas Jawadi  
       <br/>Front-End-Webentwickler
 </motion.p>
    </div>
  )
}

export default HeaderText