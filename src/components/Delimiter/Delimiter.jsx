import React from 'react'

export const Delimiter = ({color="white"}) => {
  return (
    <div className='hidden md:pt-8 md:flex justify-center gap-5'>
      <div className={`w-[5px] bg-${color} h-1 rounded-xl opacity-10`}></div>
      <div className={`w-[5px] bg-${color} h-1 rounded-xl opacity-10`}></div>
      <div className={`w-[5px] bg-${color} h-1 rounded-xl opacity-10`}></div>
      <div className={`w-[5px] bg-${color} h-1 rounded-xl opacity-10`}></div>
    </div>
  )
}
