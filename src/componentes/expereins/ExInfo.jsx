import React from 'react'

function ExInfo({number,text}) {
  return (
    <div className='flex flex-col items-center justify-center my-5'>
        <p className='text-cyan text-4xl font-body'>{number}</p>
        <p className='text-lightGrey font-serif -m-3'>{text}</p>
    </div>
  )
}

export default ExInfo