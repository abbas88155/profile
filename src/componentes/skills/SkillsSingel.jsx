import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../componentes/fremer/variants'

function SkillsSingel({ imgSvg, text }) {
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="relative hover:-translate-y-6 transition-all duration-500"
    >
      {/* پس‌زمینه نارنجی */}
      <div className="w-[100px] h-[200px] bg-orange absolute top-[50px] left-1/2 -translate-x-1/2 -z-10 rounded-md"></div>

      <div className="flex flex-col justify-center items-center relative z-10">
        <motion.div
          variants={fadeIn('left', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="w-[100px] h-[100px] rounded-full bg-white text-cyan flex items-center justify-center text-4xl border-4 border-orange hover:bg-darkBrown transition-all duration-300"
        >
          {imgSvg}
        </motion.div>

        <motion.p
          variants={fadeIn('down', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="font-mono text-white font-md mt-2 text-sm"
        >
          {text}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default SkillsSingel
