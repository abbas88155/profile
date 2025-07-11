import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../componentes/fremer/variants'
function ExTopMi() {
  return (
    <div className='sm:w-[300px] md:w-[400px]' >
        <motion.img variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show' className='w-[300px] md:w-[400px] h-auto' src="/profile/images/experience-image.png" alt="" />
    </div>
  )
}

export default ExTopMi