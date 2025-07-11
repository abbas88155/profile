import React from 'react'
import ContactText from './ContactText'
import ContactRight from './ContactRight'
import ContactLeft from './ContactLeft'

function ContactMain() {
  return (
    <div id='contact' className=''>
        <div className='max-w-[1200px] mx-auto px-2 mt-14'>
            <ContactText/>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4 mt-2 bg-lightGrey/50 rounded-xl'>
                <ContactRight/>
                <ContactLeft/>
            </div>
            
        </div>
    </div>
  )
}

export default ContactMain