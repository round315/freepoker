import React, { useState } from 'react';
import ReactModal from 'react-modal';

import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Game from './components/Game.js';

import chip from './assets/img/chip.png';
import chips from './assets/img/chips.png';
import chips1 from './assets/img/chips1.png';
import chips2 from './assets/img/chips2.png';
import card from './assets/img/card.png';
import position from './assets/img/position.png';
import position1 from './assets/img/position1.png';
import position2 from './assets/img/position2.png';
import you from './assets/img/you.png';
import you1 from './assets/img/you1.png';
import you2 from './assets/img/you2.png';
import card1 from './assets/img/card1.png';
import card2 from './assets/img/card2.png';

export default function App() {
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
  const [isGame, setIsGame] = useState(true)
  function viewGame() {
    setIsGame(!isGame)
  }

  return (
    <div className="App " >
      <Header />
      {isGame
        ?
        <div>
          {display
            ? <div className={`Main ${animation}`} onLoad={() => hide(2000)}>
              <div className='w-full h-[calc(100vh_-_97px)] z-10 grid place-items-center bg-gradient-radial from-yellow-300 to-orange-500'>
                <img className='max-h-100 place-items-center z-50' src={require('./assets/img/preload.png')} alt='247FREEPOKER' />
              </div>
            </div>

            : <div className='w-full h-[calc(100vh_-_97px)] z-10 grid justify-items-center bg-gradient-radial from-green-500 to-lime-800'>

              <img className='translate-y-10 max-h-80 place-items-center ' src={require('./assets/img/background.png')} alt='247FREEPOKER' />
              <div className='button h-14 rounded-md py-2 px-5 hover:scale-105 shadow-md' >
                <button className='font-serif text-white text-3xl font-bold' onClick={toggleModal}>
                  <svg className="inline-flex h-8 w-8 text-black" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polygon points="5 3 19 12 5 21 5 3" /></svg>
                  PLAY
                </button>
              </div>
              <ReactModal isOpen={isOpen} onRequestClose={toggleModal} className='mymodal' overlayClassName='myoverlay' closeTimeoutMS={300}>
                <img className='rounded-md' src={require('./assets/img/resume.png')} alt='' />
                <div className='absolute z-30 bottom-5 flex justify-around px-3 gap-5 w-full'>
                  <div className='button h-12 rounded-md py-2 px-5 hover:scale-105' >
                    <button className='font-serif text-white text-xl font-bold' onClick={viewGame}>
                      NEW GAME
                    </button>
                  </div>
                  <div className='button h-12 rounded-md py-2 px-5 hover:scale-105' >
                    <button className='font-serif text-white text-xl font-bold'>
                      RESUME
                    </button>
                  </div>
                </div>
              </ReactModal>
            </div>
          }
        </div>
        :
        // <Game />
        <div className='w-full h-[calc(100vh_-_97px)] z-10 grid justify-items-center bg-gradient-radial from-green-500 to-lime-800'>
          <div className='absolute z-30 top-40 w-2/5'>
            <div className='grid justify-center'>
              <img className='h-20 ' src={chip} alt='' />
            </div>
            <div className='grid grid-cols-5 gap-1'>
              <div><img src={card} alt='' /></div>
              <div><img src={card} alt='' /></div>
              <div><img src={card} alt='' /></div>
              <div><img src={card} alt='' /></div>
              <div><img src={card} alt='' /></div>
            </div>
          </div>
          <div className='absolute top-60 w-3/5'>
            <div className='float-left'>
              {/* <img className='h-24' src={position} alt='' /> */}
              <img className='h-44 -translate-y-24' src={position1} alt='' />
              <p className='absolute z-30 top-6 grid justify-center translate-x-10' >$1000</p>
              <p className='absolute z-30 top-12 content-center translate-x-10' >name</p>
              <div className='absolute -top-4 translate-x-24'>
                <img className='h-12' src={chips1} alt='' />
              </div>
            </div>
            <div className=' float-right'>
              <div className='float-left'>
                {/* <img className='h-24' src={position} alt='' /> */}
                <img className='h-44 -translate-y-24' src={position1} alt='' />
                <p className='absolute z-30 top-6 grid justify-center translate-x-10' >$1000</p>
                <p className='absolute z-30 top-12 content-center translate-x-10' >name</p>
                <div className='absolute -top-4 -translate-x-16'>
                  <img className='h-12' src={chips1} alt='' />
                </div>
              </div>
            </div>
            <div className=' '>
              <div className='absolute right-20 top-60'>
                {/* <img className='h-24' src={position} alt='' /> */}
                <img className='h-44 -translate-y-24' src={position1} alt='' />
                <p className='absolute z-30 top-6 grid justify-center translate-x-10' >$1000</p>
                <p className='absolute z-30 top-12 content-center translate-x-10' >name</p>
                <div className='absolute -top-4 -translate-x-16'>
                  <img className='h-12' src={chips1} alt='' />
                </div>
              </div>
            </div>
            <div className=' '>
              <div className='absolute left-1/2 top-64'>
                {/* <img className='relative h-32 -left-1/2' src={you} alt='' /> */}
                <img className='relative h-48 -translate-y-24 -left-1/2' src={you1} alt='' />
                <p className='absolute z-30 top-8 grid justify-center -translate-x-6 text-lg' >$1000</p>
                <p className='absolute z-30 top-16 content-center -translate-x-4 text-lg' >You</p>
                <div className='absolute -top-4 translate-x-12'>
                  <img className='h-12' src={chips1} alt='' />
                </div>
              </div>
            </div>
            <div className=' '>
              <div className='absolute left-20 top-60'>
                {/* <img className='h-24' src={position} alt='' /> */}
                <img className='h-44 -translate-y-24' src={position1} alt='' />
                <p className='absolute z-30 top-6 grid justify-center translate-x-10' >$1000</p>
                <p className='absolute z-30 top-12 content-center translate-x-10' >name</p>
                <div className='absolute -top-4 translate-x-24'>
                  <img className='h-12' src={chips1} alt='' />
                </div>
              </div>
            </div>

          </div>
        </div>

      }
      <Footer />
    </div>
  );
};