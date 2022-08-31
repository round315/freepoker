import React from 'react'
import '../assets/css/Modal.css'

export default function Modal() {
    return (
        <div className='mymodal' overlayClassName='myoverlay' closeTimeoutMS={300}>
            <img className='rounded-md' src={require('../assets/img/resume.png')} alt='' />
        </div>
    )
}