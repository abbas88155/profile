
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../componentes/fremer/variants'
function Singel(ex) {
  return (
    <div className='border-orange border-[1px] border-dotted p-3 text-lightGrey font-mono font-semibold'>
        <div>{ex.job}</div>
        <p>{ex.yeaers}</p>
        <p>{ex.company}</p>
        <motion.ul>{ex.to.map((item)=>{
            return(
                <motion.li variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show'>{item}</motion.li>
            )
        })}</motion.ul>

    </div>
  )
}

export default Singel