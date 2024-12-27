import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import _ from 'lodash';

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
            // First animation is smiley, second animation is a 'W' letter, third animation is a spiral, last animation is random
            buildArtAnimation(false, 500, 2, 4, 11, 17, 18, 19, 15),
            buildArtAnimation(false, 300, 1, 6, 11, 17, 13, 19, 15, 10, 5),
            buildArtAnimation(false, 300, 23, 22, 21, 16, 11, 6, 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 19, 14, 9, 8, 7, 12, 17, 18, 13),
            buildArtAnimation(false, 300, ..._.shuffle(Array.from({ length: 25 }, (_, i) => i + 1)))
        ]);
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

    return (
        <div className="intro-container">
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
                <h1 className="intro-header">Hi, my name is Wilson Oon</h1>
                <p className="intro-subheader">I'm a <b>full-stack developer</b> based in Singapore.</p>
            </div>
        </div>
    );
}

export default Home;
