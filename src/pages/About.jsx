import React, { useEffect, useRef, useState } from 'react';
import '../styles/About.css';
import TechStackCard from '../components/TechStackCard';
import * as Dialog from '@radix-ui/react-dialog';
import { XLg } from 'react-bootstrap-icons';
import { IntroBriefImageCarousel } from '../components/IntroBriefCarousel';

const projects = [
    {
        id: 1,
        title: 'InvReturn',
        description: "InvReturn is a lightweight Spigot plugin that allows players to recover their dropped items from their inventory upon death. It is designed to be very simple, providing a single permission and command to access the plugin's features.",
        project_media: null, // Link to project media
        weblink: 'https://github.com/Wilsoon7721/InvReturn/', // Link to live project
        completed_year: 2020,
        used_technologies: [1] // This ID refers to the techCards array, or can be a string for additional technologies
    },
    {
        id: 2,
        title: 'SpotifyAutoSync',
        description: 'The project came up as I was looking for a way to add my liked songs automatically to one big playlist on Spotify without having to manually add them one by one.',
        weblink: null,
        project_media: null,
        completed_year: 2024,
        used_technologies: [2]
    },
    {
        id: 3,
        title: 'CalendarPlanner',
        description: 'CalendarPlanner is a Python command-line application I created to practice OAuth integration with Google Calendar. It allows users to create, update, and delete events in the calendar. Additionally, I added functionality to allow events to be automatically deleted after the event time has passed.',
        weblink: null,
        project_media: null,
        completed_year: 2023,
        used_technologies: [2]
    },
    {
        id: 4,
        title: 'FoodTagsWeb',
        description: 'FoodTagsWeb is a Python web application I created as a server ran on my Raspberry Pi. It hosts a MySQL database with it and is integrated with a Google Sheets spreadsheet that contains a list of the food and drinks in Singapore, and allows me to randomly search for food based on tags like Lunch, Dinner, Spicy, Soup-based.',
        weblink: null,
        project_media: null,
        completed_year: 2024,
        used_technologies: [2]
    },
    {
        id: 5,
        title: 'TaskManagementApplication',
        description: 'TaskManagementApplication is integrated with a MySQL database to provide login functionality, while being able to create, delete, update tasks and assign tasks to different users in the same workspace.',
        weblink: null,
        project_media: 'video,https://www.youtube.com/watch?v=ETE_U60vwgI',
        completed_year: 2024,
        used_technologies: [3, 4, 5, 'Node.js', 'Express']
    }
]

const techCards = [
    {
        id: 1,
        category: 'Programming Language',
        title: 'Java',
        image: 'https://github.com/abranhe/programming-languages-logos/blob/master/src/java/java.png?raw=true',
        extended: {
            start_date: '2019-08-24',
            technology_website: 'https://www.java.com/',
            additional_specialisations: ['Minecraft', 'Spigot Plugin Development', 'Android Development', 'Maven', 'Gradle'],
            description: 'Java was my very first programming language, with most of my knowledge coming from developing Minecraft plugins. These plugins mostly involve creating custom commands and events that can be triggered by the player in game. Beyond that, I mostly learnt how to create basic GUIs using AWT as well as some Android development through Java.',
            projects: [1], // This ID refers to the projects array
        }
    },
    {
        id: 2,
        category: 'Programming Language',
        title: 'Python',
        image: 'https://github.com/abranhe/programming-languages-logos/blob/master/src/python/python.png?raw=true',
        extended: {
            start_date: '2021-01-27',
            technology_website: 'https://www.python.org/',
            additional_specialisations: ['Flask'],
            description: "Python is my main language for most of my projects. I've used it several times for web development with Flask, but mostly use it for personal projects that integrate with the various services I use such as Spotify.",
            projects: [2, 3, 4] // This ID refers to the projects array
        }
    },
    {
        id: 3,
        category: 'Programming Language',
        title: 'HTML',
        image: 'https://github.com/abranhe/programming-languages-logos/blob/master/src/html/html.png?raw=true',
        extended: {

        }
    },
    {
        id: 4,
        category: 'Programming Language',
        title: 'JavaScript',
        image: 'https://github.com/abranhe/programming-languages-logos/blob/master/src/javascript/javascript.png?raw=true'
    },
    {
        id: 5,
        category: 'Programming Language',
        title: 'CSS',
        image: 'https://github.com/abranhe/programming-languages-logos/blob/master/src/css/css.png?raw=true'
    },
    {
        id: 6,
        category: 'Programming Language',
        title: 'C#',
        image: 'https://github.com/abranhe/programming-languages-logos/blob/master/src/csharp/csharp.png?raw=true'
    },
    {
        id: 7,
        category: 'Service',
        title: 'LMN',
        image: 'await_image.png'
    },
    {
        id: 8,
        category: 'Framework',
        title: 'LMN',
        image: 'await_image.png'
    },
    {
        id: 9,
        category: 'Database',
        title: 'OPQ',
        image: 'await_image.png'
    },
];

const techColors = ['#FFF833', '#FE5A34', '#32EBFF'];

const About = () => {
    const [showHint, setShowHint] = useState(false);
    const hintShown = useRef(false);
    const stackRef = useRef(null);
    const hintEl = useRef(null);

    useEffect(() => {
        let observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hintShown.current) {
                setShowHint(true);
                setTimeout(() => {
                    setShowHint(false)
                    observer.disconnect();
                    hintShown.current = true;
                    setTimeout(() => {
                        if (hintEl.current)
                            hintEl.current.remove();
                    }, 500);
                }, 4000);
            }
        }, {
            threshold: 0.5
        });

        if (stackRef.current) {
            observer.observe(stackRef.current);
        }

        return () => {
            if (stackRef.current) {
                observer.unobserve(stackRef.current);
            }
        };
    });


    return (
        <div className='about-container'>
            <h3 className="text-center text-2xl mt-[3.5%] mb-0">About Me</h3>
            <div className="border-b border-[#36454f] font-['Roboto'] flex  flex-col md:flex-row w-full h-screen m-0 box-border">
                <div className='about-content-brief-text flex flex-col justify-center px-8 mt-8 max-w-[100%] md:max-w-[65%] lg:max-w-[60%] mr-[5px] space-y-3 text-md lg:mt-0 lg:px-20 lg:text-lg xl:text-xl'>
                    <p>Hey! I'm Wilson Oon and I started coding when I was 13.</p>
                    <p>I started with Minecraft plugins that I would develop and play with on my server. Over the years, I used this passion for coding to develop websites and other applications for my own use.</p>
                    <p>Now, I mostly spend my time experimenting with new project ideas and seeing what I could make out of the programming languages and services that I know, while also learning new ones.</p>
                    <p>Additionally, I also spend some time learning more about psychology through online articles about the various topics that interest me.</p>
                </div>
                <IntroBriefImageCarousel />
            </div>
            <div ref={stackRef} className='about-content-stack'>
                <h3 className='text-center text-2xl mt-[50px] mb-0'>Tech Stack</h3>
                <h6 ref={hintEl} className={`text-center text-lg text-gray-600 mt-2 tansform transition-all duration-500 ease-in-out ${showHint ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    Click on a card to learn more!
                </h6>
                <div className="tech-stack-scroll-container">
                    <div className='tech-stack-scroll'>
                        {[...techCards, ...techCards].map((card, index) => {
                            return (
                                <TechStackCard animationDelay={`${index * 0.2}s`} category={card.category} title={card.title} image={card.image} backgroundColor={techColors[index % techColors.length]} key={index + 1} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <Dialog.Root>
                <Dialog.Trigger className="px-4 py-2 bg-green-400 rounded-md">Open Modal</Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/30 z-40" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[75vw] h-[80vh] -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row rounded-xl overflow-hidden shadow-2xl">

                        <div className="w-full md:w-[40%] lg:w-[30%] md:h-full h-[40%] bg-[#256317] p-6 flex items-center justify-center md:rounded-l-xl md:rounded-t-none rounded-t-xl overflow-y-auto">
                            <div className="text-white text-center space-y-2">
                                <img className='w-24 h-24 lg:w-36 lg:h-36 mt-12 mx-auto md:mt-0 mb-6' src='https://github.com/abranhe/programming-languages-logos/blob/master/src/java/java.png?raw=true'></img>
                                <h2 className="text-xl font-semibold">Language Name</h2>
                                <p className='text-md'>Type: Programming Language</p>
                                <p className='text-md'>X years of experience (calculate start date)</p>
                                <p className='text-md'>Primary Specialisations: LIST</p>
                                <p className='text-md'><a target='_blank' rel='noopener noreferrer' className='text-white font-bold underline hover:text-green-500' href='https://www.google.com'>Technology Website</a></p>
                            </div>
                        </div>

                        <div className="md:w-[70%] w-full md:h-full h-[60%] bg-[#c2fcb7] overflow-y-auto p-6">
                            <div className="text-start px-12 py-4 text-gray-700 space-y-4">
                                <p className='text-lg mt-4 mb-6'>DESCRIPTION</p>
                                <h2 className="text-xl text-center font-semibold">Projects</h2>
                                <div className="flex flex-col md:flex-row">
                                    <MediaContent />
                                </div>
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <p key={i}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula urna in turpis faucibus, et varius nunc fermentum.
                                    </p>
                                ))}
                            </div>
                        </div>

                        <Dialog.Close asChild>
                            <button className="text-white absolute top-4 right-4 md:text-gray-500 hover:text-black transition">
                                <XLg size={20} />
                            </button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div >
    );
};

export default About;