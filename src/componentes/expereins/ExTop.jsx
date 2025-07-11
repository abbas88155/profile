import React from 'react'
import ExTopMi from './ExTopMi'
import ExTopRight from './ExTopRight'
import ExTopLift from './ExTopLift'

function ExTop() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between mt-6 mb-4 '>
        <ExTopLift/>
        <ExTopMi/>
        <ExTopRight/>
    </div>
  )
}

export default ExTop