import React from 'react'
import { WorkList } from '../WorkList/WorkList'
import { Delimiter } from '../Delimiter/Delimiter';

export const EditWork = () => {

  
  const videos = [
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
    <>
    <Delimiter color={"white"}/>
    <WorkList videos={videos} title={'✂️ Edit&Cut'} description ={'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis itaque, quaerat deserunt delectus reiciendis repellat accusantium aperiam, quasi dolor, beatae quia odio error? Quibusdam nobis, cupiditate fugiat et eligendi nam.'}/>
    </>
  )
}
