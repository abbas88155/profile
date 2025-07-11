import React from 'react'
import {fadeIn} from '../../componentes/fremer/variants'
import {motion} from 'framer-motion'
function AboutMeImg() {
  return (
    <div className='h-[500px] w-[300px] relative sm:mt-11'>
        <div className='h-[500px] w-[300px] overflow-hidden absolute z-10'>
            <motion.img variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show' className='h-full w-auto object-cover rounded-[120px]' src="/profile/images/about-me.jpg" alt=" about me image" />
        </div>
        <div className='h-[500px] w-[250px] absolute left-[-30px] bottom-[-30px] bg-orange rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[30px]'></div>
    </div>
  )
}

export default AboutMeImg