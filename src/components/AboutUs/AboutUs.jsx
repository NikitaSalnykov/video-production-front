
import photo from '../../assets/author-photo.jpg'

export const AboutUs = () => {
  return (
<div className=" bg-white w-full flex md:flex-row flex-col ">

<div className="md:w-1/2 h-[380px] md:h-[480px]  object-cover overflow-hidden">
  <img src={photo} alt="dmitriy shelyugov" className='h-[100%] w-[100%] object-cover md:w-[750px] brightness-[1.03]' />
</div>
<div className="md:w-1/2 text-black flex flex-col justify-center m-4">
  <h2 className='font-black text-6xl lg:text-9xl uppercase'>About <span className='opacity-60'>me</span></h2>
  <div className=' hidden  py-4 md:flex'>
    <div className='w-[40%] h-[5px] bg-black'></div>
    <div className='w-[20%] h-[5px] bg-black opacity-40'></div>
  </div>
    <p className='text-black font-semibold text-lg md:text-2xl mt-[10px] md:w-[90%] uppercase opacity-90 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ut vitae fugiat ipsa dolorem amet placeat perspiciatis sint, nemo, nobis voluptas numquam mollitia voluptatem neque aliquid. Tenetur quasi corrupti harum.</p>
  </div>
</div>
  )
}
