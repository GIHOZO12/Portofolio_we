// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Section = ({title}) => {
  return (
    <div className='flex gap-9 items-center py-10 px-4' >
        <h1 className='text-2xl text-secondary font-semibold text-center'>{title}</h1>
        <div className='w-40 h-[1px] bg-tertiary'>

</div>
        </div>
  )
}

export default Section