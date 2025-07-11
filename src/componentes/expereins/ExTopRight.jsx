import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../componentes/fremer/variants'
function ExTopRight() {
  return (
    <div>
        <div className='w-[300px] border-2 border-dotted p-5 lg:p-5 border-lightGrey text-white font-mono mt-4 lg:mt-1 rounded-md  '>
            <motion.p variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show'>
              In den letzten zwei Jahren habe ich an vier großen Website-Projekten für lokale Unternehmen und persönliche Kunden gearbeitet.  
              Ich liebe es, reale Probleme durch Front-End-Entwicklung zu lösen, und lerne ständig weiter, um mit den neuesten Trends Schritt zu halten.
</motion.p>
        </div>
    </div>
  )
}

export default ExTopRight