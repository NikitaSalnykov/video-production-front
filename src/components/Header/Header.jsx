import { useState } from 'react';
import Svg from '../Svg/Svg'
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const onToglegModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="mx-4 py-4 text-xl md:text-2xl uppercase">
      <div className='flex flex-row-reverse items-center justify-between  text-[#212121] rounded-full px-6 py-1'>
        <div className="flex flex-raw items-center scale-80 md:scale-150 md:pr-8" >
        <div className="relative">
        <Svg size={44} fill={'white'} stroke={"#212121"} id="icon-photo2"/>
        <div className=' rounded-full bg-red absolute top-[20%] right-[33%] border-[3px] border-neutral-50'>
          <div className="w-[6px] h-[6px] rounded-full bg-red "></div>
        </div>
        </div>
        <div className="flex flex-col  leading-[16px] decoration-clone ml-1 text-[#ffffff]">
        <div className='text-sm font-medium  leading-[18px]'>Dmitriy</div>
        <div className='text-sm font-medium leading-[8px]'>Shelygov</div>
        <div className='text-[7px] font-extralight leading-[12px] text-red lowercase'>cameraman & director</div>
        </div>
        </div>
        <div className="text-[#ffffff]">
          <nav>
            <ul>
              <li>About</li>
              <li></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header