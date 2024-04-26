import { useState } from 'react';
import Svg from '../Svg/Svg'
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const onToglegModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="mx-4 py-4 text-xl md:text-3xl uppercase">
      <div className='flex items-center justify-between bg-[#ffffff] text-[#212121] rounded-full px-6 py-1'>
        <div className="flex  gap-2 items-center font-black" >
        <Svg size={55} fill={'#212121'} stroke={"white"} id="icon-photo"/>
        <div className="flex flex-col md:flex-row md:gap-1 leading-1 leading-none">
        <div>Dmitriy</div>
        <div>Sheliuhov</div>
        </div>
        </div>
        <div className="">
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