import React from 'react'
import ContactForm from './ContactForm'

function ContactRight() {
  return (
    <div>
        <div className='flex flex-col items-start justify-start px-6'>
            <h2 className='text-3xl text text-orange text-start font-mono'>Kontakt</h2>
            <p className='text-lightGrey font-mono'>
              Haben Sie ein Projekt im Kopf?  
             Lassen Sie uns sprechen!  
            Ich bin offen für neue Möglichkeiten, Kooperationen oder Freelance-Projekte.  
              Kontaktieren Sie mich – ich melde mich so schnell wie möglich.
</p>
        </div>
        <ContactForm/>
    </div>
  )
}

export default ContactRight