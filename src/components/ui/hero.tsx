// src/components/Hero.js
import React from 'react';
import VideoBanner from './videocomponent'

const Hero = () => {
    return (
        <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url("/hero-image.jpg")' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative w-full h-full flex justify-center items-center text-center text-white">
                <video autoPlay muted loop src="https://videos.pexels.com/video-files/3089895/3089895-uhd_2560_1440_30fps.mp4" className="absolute w-full h-full object-cover brightness-50"></video>
                <div className='z-10'>
                <h1 className="text-white text-6xl font-bold ">Our Udon is Alive</h1>
                <p className="mt-4 text-lg">Fresh, handcrafted udon every day.</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
