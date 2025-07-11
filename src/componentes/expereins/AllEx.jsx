import React from 'react'
import { BiArrowToBottom, BiArrowToRight } from 'react-icons/bi'
import Singel from './Singel'
import {motion} from 'framer-motion'
import {fadeIn} from '../../componentes/fremer/variants'



const ex = [
  {
    job: 'Front-End-Entwickler',
    years: '2023',
    company: 'Freelance',
    to: [
      'Entwicklung responsiver, zugänglicher Websites mit HTML, CSS und JavaScript. Fokus auf Performance, Browserkompatibilität und Umwandlung von Designs in interaktive Benutzeroberflächen.'
    ],
  },
  {
    job: 'Front-End-Entwickler',
    years: '2024',
    company: 'Freelance',
    to: [
      'Gestaltung und Entwicklung von React-basierten Interfaces für verschiedene Kunden. Anwendung von UI/UX-Best-Practices zur Erstellung moderner, skalierbarer Komponenten.'
    ],
  },
  {
    job: 'Front-End-Entwickler',
    years: '2025',
    company: 'Freelance',
    to: [
      'Zusammenarbeit mit Kunden zur Entwicklung individueller Weblösungen. API-Integration, SEO-Optimierung und pixelgenaues, mobiles Design mit React und Tailwind CSS.'
    ],
  },
]

function AllEx() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between gap-6 px-6 py-10'>
      {ex.map((item, index) => (
        <React.Fragment key={index}>
          <Singel {...item} />
          {index < ex.length - 1 && (
            <>
              <BiArrowToRight className='text-orange hidden lg:flex text-5xl' />
              <BiArrowToBottom className='text-orange flex lg:hidden text-3xl' />
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default AllEx
