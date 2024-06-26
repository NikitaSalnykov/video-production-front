
import photo from '../../assets/author-photo2.jpg'

export const Skills = () => {
  return (
<div className="  w-full flex flex-col md:flex-row-reverse  ">

<div className="md:w-1/2 h-[380px] md:h-[480px]   object-cover overflow-hidden">
  <img src={photo} alt="dmitriy shelyugov" className='w-[100%] h-[100%] brightness-[1.03] object-cover' />
</div>
<div className="md:w-1/2 flex flex-col justify-center m-4">
  <h2 className='font-black text-6xl lg:text-9xl uppercase'>My <span className='opacity-60'>skills</span></h2>
  <div className=' hidden  py-4 md:flex'>
    <div className='w-[20%] h-[5px] bg-white'></div>
    <div className='w-[40%] h-[5px] bg-white opacity-40'></div>
  </div>
    <p className='text-lg lg:text-2xl mt-[10px] lg:w-[80%] uppercase opacity-90  font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ut vitae fugiat ipsa dolorem amet placeat perspiciatis sint, nemo, nobis voluptas numquam mollitia voluptatem neque aliquid. Tenetur quasi corrupti harum.</p>
  </div>
</div>
  )
}
