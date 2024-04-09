import React, { useRef } from 'react';

export const MediaList = ({videos}) => {


    const videoRefs = videos.reduce((acc, _, index) => {
        acc[`video${index + 1}`] = useRef(null);
        return acc;
    }, {});

    const handleMouseEnter = (videoRef) => {
        videoRef.current.play();
    };

    const handleMouseLeave = (videoRef) => {
        videoRef.current.pause();
    };

    return (
                    <div className="gap-6 mt-8 mx-4 grid md:grid-cols-2">
                        {videos.map((video, index) => (
                            <div key={index} className="w-full">
                                <div className="wrap-video" onMouseEnter={() => handleMouseEnter(videoRefs[`video${index + 1}`])} onMouseLeave={() => handleMouseLeave(videoRefs[`video${index + 1}`])}>
                                    <video className="object-cover h-96 w-full bg-black" ref={videoRefs[`video${index + 1}`]} loop >
                                        <source 
                                            src={video.src}
                                            type="video/mp4"/>
                                    </video>
                                </div>
                                <span className="pt-4 grid grid-cols-6 gap-4">
                                    <span className="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">
                                        {video.title}
                                    </span>
                                    <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
                                        <span className="">
                                            {video.type}
                                        </span>
                                    </span>
                                </span>
                                <span className="block text-slate-400 text-xs uppercase font-mono">
                                    {video.description}
                                </span>
                            </div>
                        ))}
                    </div>
    );
};
