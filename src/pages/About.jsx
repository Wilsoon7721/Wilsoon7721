import React, { useRef } from 'react';
import '../styles/About.css';
import TechStackCard from '../components/TechStackCard';
import { IntroBriefImageCarousel } from '../components/IntroBriefCarousel';

const techCards = [
    {
        category: 'Programming Language',
        title: 'ABC',
        image: 'await_image.png'
    },
    {
        category: 'Programming Language',
        title: 'DEF',
        image: 'await_image.png'
    },
    {
        category: 'Programming Language',
        title: 'GHI',
        image: 'await_image.png'
    },
    {
        category: 'Framework',
        title: 'JKL',
        image: 'await_image.png'
    },
    {
        category: 'Service',
        title: 'LMN',
        image: 'await_image.png'
    },
    {
        category: 'Database',
        title: 'OPQ',
        image: 'await_image.png'
    },
]

const techColors = ['#FFF833', '#FE5A34', '#32EBFF'];

const About = () => {
    const stackRef = useRef(null);
    return (
        <div className='about-container'>
            <h3 className="text-center text-2xl mt-[3.5%] mb-0">About Me</h3>
            <div className="border-b border-[#36454f] font-['Roboto'] flex  flex-col md:flex-row w-full h-screen m-0 box-border">
                <div className='flex flex-col justify-center px-8 mt-8 max-w-[100%] md:max-w-[65%] lg:max-w-[60%] mr-[5px] space-y-3 text-md lg:mt-0 lg:px-20 lg:text-lg xl:text-xl'>
                    <p>Hey! I'm Wilson Oon and I started coding when I was 13.</p>
                    <p>I started with Minecraft plugins that I would develop and play with on my server. Over the years, I used this passion for coding to develop websites and other applications for my own use.</p>
                    <p>Now, I mostly spend my time experimenting with new project ideas and seeing what I could make out of the programming languages and services that I know, while also learning new ones.</p>
                    <p>Additionally, I also spend some time learning more about psychology through online articles about the various topics that interest me.</p>
                </div>
                <IntroBriefImageCarousel />
            </div>
            <div ref={stackRef} className='about-content-stack'>
                <h3 className='text-center text-2xl mt-[50px] mb-0'>Tech Stack</h3>
                <div className="tech-stack-scroll-container">
                    <div className='tech-stack-scroll'>
                        {[...techCards, ...techCards].map((card, index) => {
                            return (
                                <TechStackCard animationDelay={`${index * 0.2}s`} category={card.category} title={card.title} image={card.image} backgroundColor={techColors[index % techColors.length]} key={index} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='about-content-projects'>
                <h3 className='text-center text-2xl mt-[50px] mb-0'>Projects</h3>
            </div>
        </div >
    );
};

export default About;