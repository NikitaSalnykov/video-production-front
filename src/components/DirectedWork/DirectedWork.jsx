import React from 'react'
import { WorkList } from '../WorkList/WorkList'
import { Delimiter } from '../Delimiter/Delimiter';

export const DirectedWork = () => {
  
  const videos = [
    {
      src: 'https://assets-global.website-files.com/62d57921074baa1ce7275405/648b6bdb802c1efb403e5be5_ZOOM2-transcode.mp4',
      title: 'bmw film',
      type: 'mood video',
  },
  {
    src: 'https://assets-global.website-files.com/62d57921074baa1ce7275405/648b6bdb802c1efb403e5be5_ZOOM2-transcode.mp4',
    title: 'big d$$ck',
    type: 'xxx video',
},
];


  return (
    <>
    <Delimiter color={"white"}/>
    <WorkList reverse={true} videos={videos} title={'🎬 Directed'} description ={' Facilis itaque, quaerat deserunt delectus reiciendis repellat accusantium aperiam, quasi dolor, beatae quia odio error? Quibusdam nobis, cupiditate fugiat et eligendi nam.'}/>
    </>
  )
}
