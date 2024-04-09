import React from 'react'
import { MediaList } from '../MediaList/MediaList';
import video from "../../assets/palnet.mp4"

export const FeaturedWork = () => {
  const videos = [
    {
        src: 'https://assets-global.website-files.com/62d57921074baa1ce7275405/648b6bdb802c1efb403e5be5_ZOOM2-transcode.mp4',
        title: 'pool drop',
        type: 'fashion/retail',
    },
    {
        src: 'https://assets-global.website-files.com/62d57921074baa1ce7275405/640fe762f883d05b8f683c6d_HOKABODEGA-transcode.mp4',
        title: 'not young not old',
        type: 'music video',
    },
    {
      src: 'https://assets-global.website-files.com/62d57921074baa1ce7275405/63c084f55da78823643adbc3_ThePerfectPants-transcode.mp4',
      title: 'bmw film',
      type: 'mood video',
  },
  {
    src: 'https://assets-global.website-files.com/62d57921074baa1ce7275405/63c084f55da78823643adbc3_ThePerfectPants-transcode.mp4',
    title: 'big d$$ck',
    type: 'xxx video',
},
];

  return (
    <div className="relative flex min-h-screen flex-col bg-black">
    <div className="min-h-28">
        <div className="mx-auto py-4">
            <h2 className="font-black text-6xl md:text-9xl text-white uppercase">
                featured work
            </h2>
        <MediaList videos={videos}/>
            <h2 className="font-black text-7xl text-white text-center uppercase my-16 hover:bg-white hover:text-black hover:rounded-full hover:px-6">
                view select work
            </h2>
        </div>
    </div>
</div>
  )
}
