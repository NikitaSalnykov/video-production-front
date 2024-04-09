import React from 'react'
import { Title } from '../Title/Title'
import { Link } from 'react-router-dom'

export const PriceList = () => {
  return (
    <div className='mb-4'>
      <div className="pt-4">
      <Title title={"Прайс-лист"}/>
      </div>

    <div className="md:px-24 xl:px-44  flex flex-col gap-4">
    <div>
        <div className="flex justify-center items-center mb-4">
        <div className="flex flex-col gap-2 justify-center items-center">
        <h4 className='text-lg md:text-xl font-semibold xl:text-3xl'>Баня</h4>
        <p className='text-secondaryText text-center text-sm md:text-base'>Пропонуємо послуги бані з різними варіантами часу та цінами:</p>
        </div>
        </div>
      <ul className='max-w-[1200px] mx-auto flex flex-col gap-4'>
        <li>
          <div className='flex justify-center items-center gap-10 text-sm md:text-xl font-semibold'>
            <p className='w-[200px] text-center'>1 година</p>
            <div className='w-full h-[1px] bg-secondaryText opacity-30'></div>
            <p className='w-[200px] text-center font-semibold'>300 грн</p>
          </div>
        </li>
        <li>
          <div className='flex justify-center items-center gap-10 text-sm  md:text-xl font-semibold'>
            <p className='w-[200px]  text-center'>3 години</p>
            <div className='w-full h-[1px] bg-black opacity-30'></div>
            <p className='w-[200px] text-center font-semibold'>500 грн</p>
          </div>
        </li>
        <li>
          <div className='flex justify-center items-center gap-10 text-sm md:text-xl font-semibold'>
            <p className='w-[200px] text-center'>Безліміт</p>
            <div className='w-full h-[1px] bg-black opacity-30'></div>
            <p className='w-[200px] text-center font-semibold'>1000 грн</p>
          </div>
        </li>
      </ul>
      </div>
      <div>
        <div className="flex justify-center items-center mb-4">
        <div className="flex flex-col justify-center items-center">
        <h4 className='text-lg md:text-xl font-semibold xl:text-3xl'>Чани</h4>
        <p className='text-secondaryText text-center text-sm md:text-base w-2/3'>Наші чани також доступні з різними опціями та додатковою послугою (ціни з розрахунку на 1 людину):</p>
        </div>
        </div>
      <ul className='max-w-[1200px] mx-auto flex flex-col gap-4'>
        <li>
          <div className='flex justify-center items-center gap-10 text-sm md:text-xl font-semibold'>
            <p className='w-[200px] text-center'>1 година</p>
            <div className='w-full h-[1px] bg-secondaryText opacity-40'></div>
            <p className='w-[200px] text-center font-semibold'>300 грн</p>
          </div>
        </li>
        <li>
          <div className='flex justify-center items-center gap-10 text-sm md:text-xl font-semibold'>
            <p className='w-[200px] text-center'>3 години</p>
            <div className='w-full h-[1px] bg-black opacity-40'></div>
            <p className='w-[200px] text-center font-semibold'>500 грн</p>
          </div>
        </li>
        <li>
          <div className='flex justify-center items-center gap-10 text-sm md:text-xl font-semibold'>
            <p className='w-[200px] text-center'>Безліміт</p>
            <div className='w-full h-[1px] bg-black opacity-40'></div>
            <p className='w-[200px] text-center font-semibold'>1000 грн</p>
          </div>
        </li>
        <li>
          <div className='flex justify-center items-center gap-10 text-sm md:text-xl font-semibold'>
            <p className='w-[200px] text-center'>+Трави</p>
            <div className='w-full h-[1px] bg-black opacity-40'></div>
            <p className='w-[200px] text-center font-semibold'>200 грн</p>
          </div>
        </li>
      </ul>
      </div>

      <div>
        <div className="flex justify-center items-center mb-4">
        <div className="flex flex-col justify-center items-center">
        <h4 className='text-lg md:text-xl xl:text-3xl font-semibold'>Готель</h4>
        <p className='text-secondaryText text-center text-sm md:text-base'>Затишні номери готелю з найкращими умовами для вашого відпочинку:</p>
        </div>
        </div>
      <ul className='max-w-[1200px] mx-auto flex flex-col gap-4'>
        <li>
          <div className='flex justify-center items-center gap-10 text-sm md:text-xl font-semibold'>
            <Link title="Детальніше"  to={'/territory?rooms'} className='w-[200px] text-center text-[#003997]'>Стандарт</Link>
            <div className='w-full h-[1px] bg-secondaryText opacity-40'></div>
            <p className='w-[200px] text-center font-semibold'>1200 грн</p>
          </div>
        </li>
        <li>
          <div className='flex justify-center items-center gap-10 text-sm md:text-xl font-semibold'>
            <Link title="Детальніше" to={'/territory?rooms'} className='w-[200px] text-center text-[#003997]'>Люкс</Link>
            <div className='w-full h-[1px] bg-black opacity-40'></div>
            <p className='w-[200px] text-center font-semibold'>1900 грн</p>
          </div>
        </li>
      
      </ul>
      </div>
    </div>
    </div>
  )
}
