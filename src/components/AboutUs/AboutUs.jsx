
import photo from '../../assets/author-photo.jpg'

export const AboutUs = () => {
  return (
<div className=" bg-white w-full flex md:flex-row flex-col ">

<div className="md:w-1/2 md:h-[480px]  object-cover overflow-hidden">
  <img src={photo} alt="dmitriy shelyugov" className='md:w-[750px] brightness-[1.03]' />
</div>
<div className="md:w-1/2 text-black flex flex-col justify-center m-4">
  <h2 className='font-black text-6xl md:text-6xl uppercase'>About <span className='opacity-80'>me</span></h2>
    <p className='text-black text-lg md:text-2xl mt-[10px] md:w-[80%] uppercase opacity-90 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ut vitae fugiat ipsa dolorem amet placeat perspiciatis sint, nemo, nobis voluptas numquam mollitia voluptatem neque aliquid. Tenetur quasi corrupti harum.</p>
  </div>
</div>
  )
}
