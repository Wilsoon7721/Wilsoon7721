import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div className='about-container'>
            <h3 style={{ textAlign: 'center', marginTop: '3.5%', marginBottom: 0 }}>About Me</h3>
            <div className='about-content-brief'>
                <div className='about-content-brief-text'>
                    <p>Hey! I'm Wilson Oon and I started coding when I was 13.</p>
                    <p>I started with Minecraft plugins that I would develop and play with on my server. Over the years, I used this passion for coding to develop websites and other applications for my own use.</p>
                    <p>Now, I mostly spend my time experimenting with new project ideas and seeing what I could make out of the programming languages and services that I know, while also learning new ones.</p>
                </div>
                <div className='about-content-brief-images'>
                    <div id="about-content-brief-carousel" className="carousel slide" data-bs-keyboard="false" data-bs-pause="hover" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="4000">
                                <img src="await_image.png" className="d-block" />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src="pexels-anjana-c-169994-674010.jpg" className="d-block" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#about-content-brief-carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#about-content-brief-carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='about-content-projects'>
                <h3 style={{ marginTop: '50px' }}>Projects</h3>
            </div>
        </div >
    );
};

export default About;