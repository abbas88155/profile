import React from 'react'
import ContactInfo from './ContactInfo'

function ContactLeft() {
  return (
    <div className='flex items-center justify-center flex-col px-10'>
       <div>
        <img className='w-[250px] ' src="/profile/images/email-image.png" alt="" />
       </div>
        <div>
            <ContactInfo/>
        </div>
    </div>
  )
}

export default ContactLeft
