import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Container } from '../Container/Container';
import actorPhoto from '../../images/artist.png'
import directorPhoto from '../../images/dirctor.png'

const modalRoot = document.querySelector('#start');

export const StarScreen = () => {
    const [type, setType] = useState(null);
    const [hovered, setHovered] = useState(false)

    const handleClick = (type) => {
        setType(type);
    };

    return (
        <>
            {!type &&
                createPortal(

                     <div className="w-full h-screen fixed  bg-black bg-opacity-100 top-0 left-0 z-50 ">
                       <Container>
                        <div className=" h-screen w-full text-3xl md:text-6xl lg:text-8xl flex items-center justify-center ">
                        {!hovered && <h2 className="font-black text-5xl md:text-7xl lg:text-9xl text-white uppercase text-end md:w-1/2 md:pl-20 md:text-start">
                Who are you?
            </h2>}
                        <div className=" transition-all flex flex-col w-full"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}>
                            <button
                                className={`md:hover:scale-110 duration-1000 uppercase pt-8 pb-2 px-8 bg-black opacity-80 hover:opacity-100 w-full`}
                                onClick={() => handleClick('Creator')}
                                onMouseEnter={() => setHovered("Creator")}
                            >
                                 Creator
                            </button>
                            <button
                                className={`md:hover:scale-110 duration-1000 uppercase pb-8 bg-black  opacity-80 hover:opacity-100 px-8  w-full`}
                                onClick={() => handleClick('Director')}
                                onMouseEnter={() => setHovered("Director")}

                            >
                                Director 
                            </button>
                        </div>
                        </div>
                        <img className={`absolute transition-all duration-300 opacity-10 md:opacity-10 md:blur-[3px] top-0 md:top-[-30%] right-0 scale-150 md:w-[90%] z-50 grayscale pointer-events-none ${hovered === "Creator" && "md:opacity-20 md:blur-none"}`} src={actorPhoto} alt="" />
                        <img className={`absolute transition-all duration-300 opacity-10 bottom-[5%] md:bottom-[-20%] md:blur-[3px] right-0 md:opacity-10 scale-150  md:w-[90%] h-auto z-50 grayscale pointer-events-none ${hovered === "Director" && "md:opacity-20 md:blur-none"}`} src={directorPhoto} alt="" />
                       </Container>8
                    </div>,
                    modalRoot
                )
            }
        </>
    );
};
