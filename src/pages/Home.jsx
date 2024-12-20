import React from 'react';
import '../styles/Home.css';
import { useEffect } from 'react';
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
function Home() {
    useEffect(() => {
        let bits = document.querySelectorAll('.bit');
        let onColor = '#d3d3d3';
        bits.forEach((bit) => {
            bit.addEventListener('click', () => {
                if (bit.style.backgroundColor === onColor) {
                    bit.style.backgroundColor = 'transparent';  // Off
                } else {
                    bit.style.backgroundColor = onColor; // On
                }
            });
        });

        // Cleanup event listeners when component unmounts
        return () => {
            bits.forEach((bit) => {
                bit.removeEventListener('click', () => { });
            });
        };
    }, []);

    return (
        <div className="intro-container">
            <div className="intro-art">
                <div id="grid-container">
                    <div className="bit" id="bit-1"></div>
                    <div className="bit" id="bit-2"></div>
                    <div className="bit" id="bit-3"></div>
                    <div className="bit" id="bit-4"></div>
                    <div className="bit" id="bit-5"></div>

                    <div className="bit" id="bit-6"></div>
                    <div className="bit" id="bit-7"></div>
                    <div className="bit" id="bit-8"></div>
                    <div className="bit" id="bit-9"></div>
                    <div className="bit" id="bit-10"></div>

                    <div className="bit" id="bit-11"></div>
                    <div className="bit" id="bit-12"></div>
                    <div className="bit" id="bit-13"></div>
                    <div className="bit" id="bit-14"></div>
                    <div className="bit" id="bit-15"></div>

                    <div className="bit" id="bit-16"></div>
                    <div className="bit" id="bit-17"></div>
                    <div className="bit" id="bit-18"></div>
                    <div className="bit" id="bit-19"></div>
                    <div className="bit" id="bit-20"></div>

                    <div className="bit" id="bit-21"></div>
                    <div className="bit" id="bit-22"></div>
                    <div className="bit" id="bit-23"></div>
                    <div className="bit" id="bit-24"></div>
                    <div className="bit" id="bit-25"></div>
                </div>
            </div>
            <div className="intro-text-content">
                <h1 className="intro-header">Hi, my name is Wilson</h1>
                <p className="intro-subheader">I'm a <b>full-stack developer</b> based in Singapore.</p>
            </div>
        </div>
    )
}

export default Home;