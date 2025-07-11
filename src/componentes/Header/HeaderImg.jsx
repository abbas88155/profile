import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../../componentes/fremer/variants'
// image come to right side
function HeaderImg() {
  return (
    <div className='sm:mt-9 '>
        <motion.img variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' className='h-[250px] w-auto rounded-full' src="/profile/images/abbas.jpg" alt="abbas jawadi" />
        <div></div>
    </div>
  )
}

export default HeaderImg