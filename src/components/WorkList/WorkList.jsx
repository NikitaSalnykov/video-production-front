import React from 'react'
import { MediaList } from '../MediaList/MediaList';

export const WorkList = ({videos, title, description, reverse=false}) => {

  return (
    <div className="relative flex flex-col md:flex-row bg-black">
    <div className="min-h-28">
        <div className={`mx-auto flex-col-reverse flex items-center ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
            <div className="md:w-1/2 flex">
            <div className='md:hidden w-4 mx-4 my-2'>
            <div className='h-[25%] w-[5px] bg-red opacity-80'></div>
                <div className='h-[35%] w-[5px] bg-green-400 opacity-90'></div>
                <div className='h-[40%] w-[5px] bg-blue'></div>
            </div>
            <div className="md:m-4 pt-2">
            <h2 className={`font-black text-4xl md:text-6xl text-white uppercase ${reverse &&  "md:justify-end md:text-end"}`}>
            {title || ''}
            </h2>
            <div className={`p-2 hidden md:flex ${reverse &&  "justify-end"}`}>
                <div className='w-[10%] h-[5px] bg-red opacity-80'></div>
                <div className='w-[20%] h-[5px] bg-green-400 opacity-90'></div>
                <div className='w-[25%] h-[5px] bg-blue'></div>
            </div>
            <div className={`pt-2 ${reverse && " flex md:justify-end"}`}>
            <p className={` text-lg lg:text-xl lg:w-[90%]  opacity-90  font-semibold ${reverse &&  "md:justify-end md:text-end"}`}>
                {description || ''}
            </p>
            </div>
            </div>
            </div>
            <div className="md:w-1/2">
            <MediaList videos={videos}/>
            </div>
        </div>
    </div>
</div>
  )
}
