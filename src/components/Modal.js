import React from 'react'
import '../assets/css/Modal.css'
import '../assets/css/Main.css';


export default function Modal() {
    return (
        <div >
            <img className='rounded-md' src={require('../assets/img/resume.png')} alt='' />
            <div className='absolute z-30 bottom-5 gap-40 left-7 place-items-center flex justify-between '>
                <div className='button h-12 rounded-md py-2 px-5 hover:scale-110' >
                    <button className='font-serif text-white text-xl font-bold'>
                        NEW GAME
                    </button>
                </div>
                <div className='button h-12 rounded-md py-2 px-5 hover:scale-110' >
                    <button className='font-serif text-white text-xl font-bold'>
                        RESUME
                    </button>
                </div>
            </div>

        </div>
    )
}