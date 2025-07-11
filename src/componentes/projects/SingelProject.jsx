import React from 'react'
import { BiSolidRightTopArrowCircle } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { fadeIn } from '../../componentes/fremer/variants'
function SingelProject({ name, year, link, img, side }) {
  return (
  // the image come to right site and the text come to left site




  
   <div className="flex flex-col md:flex-row items-center gap-8 sm:mb-3 md:mb-8 lg:mb-10 px-4 lg:px-10">
      {side === 'left' ? (
        <>
          {/* Image Left */}
          <motion.div variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show' className="sm:w-[350px] md:w-[650px] lg:w-[750px] overflow-hidden rounded-xl shadow-xl">
            <img
              src={img}
              alt={`${name}`}
              className=" w-full h-full object-cover transition-transform duration-500 text-auto hover:scale-105"
            />
          </motion.div>

          {/* Text Right */}
          <motion.div variants={fadeIn('down', 0.2)} initial='hidden' whileInView='show' className="w-full md:w-1/2 text-center md:text-right space-y-2 flex items-center flex-col">
            <h2 className="text-orange text-3xl lg:text-4xl font-extrabold">{name}</h2>
            <p className="text-md md:text-lg text-lightGrey font-medium">{year}</p>
            <div className="flex justify-center md:justify-end">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan font-semibold text-lg hover:text-orange transition-all duration-300"
              >
                <BiSolidRightTopArrowCircle size={24} />
              </a>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          {/* Text Left */}
          <motion.div variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show' className="w-full md:w-1/2 text-center md:text-right space-y-2 order-2 md:order-1 flex items-center flex-col">
            <h2 className="text-orange text-3xl lg:text-4xl font-extrabold">{name}</h2>
            <p className="text-md md:text-lg text-lightGrey font-medium">{year}</p>
            <div className="flex justify-center md:justify-end">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan font-semibold text-lg hover:text-orange transition-all duration-300"
              >
                <BiSolidRightTopArrowCircle size={24} />
              </a>
            </div>
          </motion.div>

          {/* Image Right */}
          <motion.div variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show' className="w-full sm:w-[350px] md:w-[650px] lg:w-[750px] overflow-hidden rounded-xl shadow-xl order-1 md:order-2">
            <img
              src={img}
              alt={`تصویر پروژه ${name}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </>
      )}
    </div>
  )
}

export default SingelProject
