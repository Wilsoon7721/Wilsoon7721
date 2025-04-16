import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export function IntroBriefImageCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        containScroll: 'trimSnaps'
    }, [Autoplay()]);
    const imageSrcs = [
        'await_image.png',
        'pexels-anjana-c-169994-674010.jpg',
        'await_image.png'
    ]
    return (
        <div className="embla w-[100%] lg:w-[40%] lg:max-w-[550px]" ref={emblaRef}>
            <div className="embla__container">
                {imageSrcs.map((src, index) => {
                    return (
                        <div className="embla__slide flex items-center justify-center h-full" key={index}>
                            <img className="embla__slide__img w-full max-h-full object-contain lg:max-w-[70%]" src={src} alt={`Image ${index}`} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}