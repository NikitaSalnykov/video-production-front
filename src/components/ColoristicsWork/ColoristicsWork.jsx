import React from 'react'
import { WorkList } from '../WorkList/WorkList';

export const ColoristicsWork = () => {
  const videos = [
    {
        src: 'https://assets-global.website-files.com/62d57921074baa1ce7275405/640fe762f883d05b8f683c6d_HOKABODEGA-transcode.mp4',
        title: 'pool drop',
        type: 'fashion/retail',
    },
    {
        src: 'https://assets-global.website-files.com/62d57921074baa1ce7275405/640fe762f883d05b8f683c6d_HOKABODEGA-transcode.mp4',
        title: 'not young not old',
        type: 'music video',
    },

];

  return (
    <>
    <WorkList videos={videos} reverse={true} title={'🖌️ Coloristics'} description ={'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis itaque, quaerat deserunt delectus reiciendis repellat accusantium aperiam, quasi dolor, beatae quia odio error? Quibusdam nobis, cupiditate fugiat et eligendi nam.'}/>
    </>
  )


}
