export default function Header() {
    return (
        <header className='sticky z-0 border-b'>
            <div className='w-full h-20 bg-sky-950 opacity-90'/>
            <img className='absolute top-0 translate-y-3 max-h-20 z-50 ' src={require('../assets/img/247-video-poker-web-icon-title.png')} alt='247FREEPOKER' />
        </header>
    )
}