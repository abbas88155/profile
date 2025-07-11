import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../componentes/fremer/variants'
function ProjectText() {
  return (
    // right side text

    <div className='flex items-center justify-center flex-col'>
      <motion.h2 variants={fadeIn('up', 0.1)} initial='hidden' whileInView='show' className='text-cyan text-4xl font-serif '> Projekte</motion.h2>
      <motion.p variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show' className='text-white/65 text-center mt-5 font-mono'>
        Hier sind einige meiner Projekte, an denen ich gearbeitet habe.
      </motion.p>
    </div>
  )
}

export default ProjectText