import { useState } from 'react';
import Svg from '../Svg/Svg'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const onToglegModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="">
      <p>Dmitriy Sheliuhov</p>
    </div>
  )
}

export default Header