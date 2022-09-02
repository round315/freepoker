import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

export default function Game() {
    return (
        <>
            <Header />
            <div className='w-full h-[calc(100vh_-_97px)] z-10 grid justify-items-center bg-gradient-radial from-green-500 to-lime-800'>
            </div>
            <Footer />
        </>
    );
};