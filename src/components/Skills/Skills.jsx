
import photo from '../../assets/author-photo2.jpg'

export const Skills = () => {
  return (
<div className="  w-full flex lg:flex-row-reverse flex-col ">

<div className="lg:w-1/2 lg:h-[480px]  object-cover overflow-hidden">
  <img src={photo} alt="dmitriy shelyugov" className='lg:w-[100vh] brightness-[1.03]' />
</div>
<div className="lg:w-1/2 flex flex-col justify-center m-4">
  <h2 className='font-black text-6xl lg:text-9xl uppercase'>My <span className='opacity-80'>skills</span></h2>
    <p className='text-lg lg:text-2xl mt-[10px] lg:w-[80%] uppercase opacity-90  font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ut vitae fugiat ipsa dolorem amet placeat perspiciatis sint, nemo, nobis voluptas numquam mollitia voluptatem neque aliquid. Tenetur quasi corrupti harum.</p>
  </div>
</div>
  )
}
