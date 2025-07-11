import React from 'react'
function HeaderBg() {
  return (
    <div>
   <div className='shadow-cyanShadow absolute  top-0 right-[400px] -z-10 animate-pulse'></div>
   <div className='shadow-orangeShadow absolute  top-0 right-0 -z-10 animate-pulse'></div>
   <div className='shadow-cyanMShadow absolute  top-[300px] left-0 opacity-35 -z-10 animate-pulse'></div>
    <div className='shadow-orangeShadow absolute  top-[300px] left-[50%] opacity-35 -z-10 animate-pulse'></div>
    <div className='shadow-cyanMShadow absolute  top-[350px] left-[50%] opacity-35 -z-10 animate-pulse'></div>
    <div className='shadow-orangeShadow absolute  top-[500px] left-[80%] opacity-35 -z-10 animate-pulse'></div>
    <div className='shadow-cyanMShadow absolute  top-[450px] left-[70%] opacity-35 -z-10 animate-pulse'></div>
    </div>
    
  )
}

export default HeaderBg;