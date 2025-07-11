import React from 'react'
import { BiLocationPlus, BiPhoneCall,  } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'


function ContactInfo() {
  return (
    <div className='flex flex-col mt-3 text-white/90 font-thin'>
   <div className='flex justify-start gap-4 items-baseline'>
    <MdEmail/>
    <p>abbasjawadi88@gmail.com</p>
   </div>
    <div className='flex  justify-start gap-4'>
    <BiPhoneCall/>
    <p>0093-767213378</p>
   </div>
   <div className='flex  justify-start gap-4'>
    <BiLocationPlus/>
    <p>Kabul-Afghanistan</p>
   </div>
    </div>
  )
}

export default ContactInfo