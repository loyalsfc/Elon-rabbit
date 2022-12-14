import React from 'react'
import logo from '../assets/logo.jpeg'

function Header() {
    function toggleMobileNav(){
        document.querySelector('.mobile-menu').classList.toggle('height-0')
    }

  return (
    <>
        <div className='mobile-menu fixed top-0 left-0 w-full h-screen flex flex-col md:flex-row md:items-center justify-center z-10 bg-black height-0 transition-all overflow-hidden '>
            <i class="fa-solid fa-xmark absolute right-4 top-4 text-white text-xl" onClick={toggleMobileNav}></i>
            <NavItems clickHandler={toggleMobileNav}/>
        </div>
        <header className='flex items-center font-russo justify-between py-6 px-6 position-sticky top-0 bg-black/[0.15]'>
            <div className='flex items-center'>
                <img src={logo} alt="" className='h-12 mr-4 rounded-lg' />
                <span className='text-2xl font-stix'>ELON RABBIT</span>
            </div>
            <nav className='hidden lg:block'>
                <ul className='flex md:items-center flex-col md:flex-row'>
                    <a href="" className='mx-10 md:mx-4 md:first:ml-0 my-4 md:my-0 cursor-pointer text-lg font-medium hover:text-primary/[0.8] hover:scale-110'><li>Twtter</li></a>
                    <a href="" className='mx-10 md:mx-4 md:first:ml-0 my-4 md:my-0 cursor-pointer text-lg font-medium hover:text-primary/[0.8] hover:scale-110'><li>Medium</li></a>
                    <a href='' className='mx-10 md:mx-4 md:first:ml-0 my-4 md:my-0 cursor-pointer text-lg font-medium hover:text-primary/[0.8] hover:scale-110'><li>Telegram</li></a>
                    <a href='#tokenomics' className='mx-10 md:mx-4 md:first:ml-0 my-4 md:my-0 cursor-pointer text-lg font-medium hover:text-primary/[0.8] hover:scale-110'><li>Tokenomics</li></a>
                    <a href='#how-to-buy' className='mx-10 md:mx-4 md:first:ml-0 my-4 md:my-0 cursor-pointer text-lg font-medium hover:text-primary/[0.8] hover:scale-110'><li>How to buy</li></a>
                </ul>
            </nav>
            <a className='mx-10 md:mx-0 hidden lg:block' href='#'>
                <button className='border px-8 py-3 font-semibold hover:bg-white hover:text-black rounded-xl'>Buy Now</button>
            </a>
            <i className="fa-solid fa-bars lg:hidden text-xl" onClick={toggleMobileNav}></i>
        </header>
    </>
  )
}

function NavItems({clickHandler}){
    return(
        <>
            <nav className=''>
                <ul className='flex md:items-center flex-col md:flex-row'>
                <a href="" className='mx-10 md:mx-4 md:first:ml-0 my-4 md:my-0 cursor-pointer text-lg font-medium hover:text-primary/[0.8] hover:scale-110'><li>Twtter</li></a>
                    <a href="" className='mx-10 md:mx-4 md:first:ml-0 my-4 md:my-0 cursor-pointer text-lg font-medium hover:text-primary/[0.8] hover:scale-110'><li>Medium</li></a>
                    <a href='' className='mx-10 md:mx-4 md:first:ml-0 my-4 md:my-0 cursor-pointer text-lg font-medium hover:text-primary/[0.8] hover:scale-110'><li>Telegram</li></a>
                    <a href='#tokenomics' className='mx-10 md:mx-4 md:first:ml-0 my-4 md:my-0 cursor-pointer text-lg font-medium hover:text-primary/[0.8] hover:scale-110' onClick={clickHandler}><li>Tokenomics</li></a>
                    <a href='#how-to-buy' className='mx-10 md:mx-4 md:first:ml-0 my-4 md:my-0 cursor-pointer text-lg font-medium hover:text-primary/[0.8] hover:scale-110 mb-4' onClick={clickHandler}><li>How to buy</li></a>
                </ul>
            </nav>
            <a className='mx-10 md:mx-0' href='#'>
                <button className='border px-4 py-2 font-semibold hover:bg-white hover:text-black'>Buy Elon Rabbit</button>
            </a>
        </>
    )
}

export default Header
