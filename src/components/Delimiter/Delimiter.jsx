import React from 'react'

export const Delimiter = ({color="white"}) => {
  return (
    <div className='hidden md:pt-8 md:flex justify-center gap-5'>
      <div className={`w-2 bg-${color} h-2 rounded-xl opacity-10`}></div>
      <div className={`w-2 bg-${color} h-2 rounded-xl opacity-10`}></div>
      <div className={`w-2 bg-${color} h-2 rounded-xl opacity-10`}></div>
      <div className={`w-2 bg-${color} h-2 rounded-xl opacity-10`}></div>
    </div>
  )
}
