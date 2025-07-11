import React from 'react'
import ExInfo from './ExInfo'
import { motion } from 'framer-motion'
import { fadeIn } from '../../componentes/fremer/variants'
function ExTopLift() {
  return (
    <div className='flex flex-col justify-center items-center w-[300px]'>
      <p className='text-orange font-bold text-2xl'>seit</p>
      <div className='flex items-center justify-around gap-5'>
        <ExInfo text={'Jahren'} number={2}/>
        <div className='text-lightGrey text-3xl'> -</div>
         <ExInfo text={'Websites Entwickelt'} number={4}/>
      </div>
      <motion.p variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show' className='text-white font-mono'>Ich habe über zwei Jahre praktische Erfahrung in der Front-End-Webentwicklung.  
In dieser Zeit habe ich vier vollständige Webprojekte umgesetzt – hauptsächlich im Rahmen von Lernprojekten und ehrenamtlichen Arbeiten, nicht gegen Bezahlung.  
Diese Erfahrungen haben mir geholfen, mein technisches Wissen zu vertiefen und reale Herausforderungen in echten Projekten zu meistern.
</motion.p>
       <ExInfo text={'budget'} number={'$0'}/>
    </div>
  )
}

export default ExTopLift