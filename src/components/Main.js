import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../assets/css/Main.css';
import Game from './Game.js';

import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const Main = () => {
    // animation
    const [animation, setAnimation] = useState('open')
    const [display, setDisplay] = useState(true)

    const hide = async (ms) => {
        setAnimation('close')
        await new Promise(r => setTimeout(r, ms))
        setDisplay(false)
    }
    // modal
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }
    //game



    return (
        <BrowserRouter>
            {display
                ? <div className={`Main ${animation}`} onLoad={() => hide(2000)}>
                    <div className='w-full h-[calc(100vh_-_97px)] z-10 grid place-items-center bg-gradient-radial from-yellow-300 to-orange-500'>
                        <img className='max-h-100 place-items-center z-50' src={require('../assets/img/preload.png')} alt='247FREEPOKER' />
                    </div>
                </div>

                : <div className='w-full h-[calc(100vh_-_97px)] z-10 grid justify-items-center bg-gradient-radial from-green-500 to-lime-800'>

                    <img className='translate-y-10 max-h-80 place-items-center ' src={require('../assets/img/background.png')} alt='247FREEPOKER' />
                    <div className='button h-14 rounded-md py-2 px-5 hover:scale-105 shadow-md' >
                        <button className='font-serif text-white text-3xl font-bold' onClick={toggleModal}>
                            <svg className="inline-flex h-8 w-8 text-black" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polygon points="5 3 19 12 5 21 5 3" /></svg>
                            PLAY
                        </button>
                    </div>
                    <ReactModal isOpen={isOpen} onRequestClose={toggleModal} className='mymodal' overlayClassName='myoverlay' closeTimeoutMS={300}>
                        <img className='rounded-md' src={require('../assets/img/resume.png')} alt='' />
                        <div className='absolute z-30 bottom-5 flex justify-around px-3 gap-5 w-full'>
                            <div className='button h-12 rounded-md py-2 px-5 hover:scale-105' >
                                <Link className='font-serif text-white text-xl font-bold' to='/newgame' target='blank'>
                                    NEW GAME
                                </Link>
                            </div>
                            <div className='button h-12 rounded-md py-2 px-5 hover:scale-105' >
                                <Link className='font-serif text-white text-xl font-bold' to='/resume'>
                                    RESUME
                                </Link>
                            </div>
                        </div>
                    </ReactModal>

                </div>
            }

            <Routes>
                <Route path='/newgame'>
                    <Game />
                </Route>
                {/* <Route path='/resume'>
                            <Resume />
                        </Route> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Main