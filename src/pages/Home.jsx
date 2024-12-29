import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import _ from 'lodash';
import { useSpring, animated } from '@react-spring/web'

function Home() {
    const [animations, setAnimations] = useState([]);
    const [activeBits, setActiveBits] = useState([]);

    let buildArtAnimation = (initialState, onInterval, ...onBitIDs) => {
        return {
            initialState: initialState,
            onInterval: onInterval,
            onBitIDs: onBitIDs
        };
    };

    useEffect(() => {
        setAnimations([
            // First animation is smiley, second animation is a heart, third animation is a 'W' letter, last animation is random
            buildArtAnimation(false, 550, 2, 4, 11, 17, 18, 19, 15),
            buildArtAnimation(false, 400, 23, 19, 15, 10, 4, 8, 2, 6, 11, 17, 18, 13, 12, 14, 7, 9),
            buildArtAnimation(false, 300, 1, 6, 11, 17, 13, 19, 15, 10, 5),
            buildArtAnimation(false, 100, ..._.shuffle(Array.from({ length: 25 }, (_, i) => i + 1)))
        ]);
    }, []);

    useEffect(() => {
        let texts = ['full-stack developer', 'psychology enthusiast', 'student', 'curious mind'];
        let selfDesc = document.querySelector('#self-desc-text');
        let index = 0;
        let deleting = false;
        let currentText = '';
        let typeDurationMillis = 100;

        const typeEffect = () => {
            let text = texts[index];
            if (deleting) {
                currentText = text.substring(0, currentText.length - 1);
                typeDurationMillis = 50;
            } else {
                currentText = text.substring(0, currentText.length + 1);
                typeDurationMillis = 200;
            }

            selfDesc.innerText = currentText;

            if (!deleting && currentText === text) {
                setTimeout(() => {
                    deleting = true;
                    typeEffect();
                }, 1000);
            } else if (deleting && currentText === '') {
                deleting = false;
                index = (index + 1) % texts.length;
                setTimeout(typeEffect, 500);
            } else {
                setTimeout(typeEffect, typeDurationMillis);
            }
        };

        typeEffect();
        return () => clearTimeout(typeEffect);
    }, []);


    const runAnimation = (animation) => {
        const { onInterval, onBitIDs } = animation;
        let currentBits = [];

        return new Promise((resolve) => {
            let index = 0;
            const intervalId = setInterval(() => {
                currentBits = [...currentBits, onBitIDs[index]];

                setActiveBits(currentBits);

                index++;
                if (currentBits.length === onBitIDs.length) {
                    clearInterval(intervalId);
                    setTimeout(() => resolve(), 1000);
                }
            }, onInterval);
        });
    };

    useEffect(() => {
        const runAllAnimations = async () => {
            while (true) {
                for (let animation of animations) {
                    await runAnimation(animation);
                }
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        };

        if (animations.length > 0)
            runAllAnimations();
    }, [animations]);

    useEffect(() => {
        let tId = setTimeout(() => {
            let introHeaderData = document.querySelector('.intro-header-data');
            introHeaderData.style.transform = `translateY(-20vh)`;
        }, 1000);
        let t2Id = setTimeout(() => {
            let introButtonsContainer = document.querySelector('.intro-buttons-container');
            introButtonsContainer.style.opacity = 1;
        }, 2500);
        return () => { clearTimeout(tId); clearTimeout(t2Id); };
    }, []);

    return (
        <div className="intro-container">
            <div className="intro-header-data">
                <div className="intro-art">
                    <div id="grid-container">
                        {[...Array(25)].map((_, index) => {
                            const id = `bit-${index + 1}`;
                            return (
                                <div
                                    key={id}
                                    id={id}
                                    className={`bit ${activeBits.includes(index + 1) ? 'on' : ''}`}
                                ></div>
                            );
                        })}
                    </div>
                </div>
                <div className="intro-text-content">
                    <h1 className="intro-header">Hi, my name is Wilson</h1>
                    <div className="intro-subheader">I'm a <div className="typewrite-effect"><b id="self-desc-text">full-stack developer</b></div> based in Singapore.</div>
                </div>
            </div>

            <div className='intro-buttons-container' style={{ opacity: 0 }}>
                <button className="intro-btn">About Me</button>
                <button className="intro-btn">Contact</button>
            </div>
        </div>
    );
}

export default Home;
