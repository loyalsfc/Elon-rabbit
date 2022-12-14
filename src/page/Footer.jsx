import logo from '../assets/logo.jpeg'

function Footer() {
    return (
        <footer className='bg-black py-8 text-[#f1f2f3]'>
            <div className="container mx-auto block text-center">
                <img src={logo} alt="" className='rounded-lg h-12 mx-auto'/>
                <span className=" font-semibold leading-[200%]">Elon Rabbit</span>
                <p className='my-4'><i>Elon Rabbit is about to change the crypto future</i></p>
                <div className='flex gap-8 justify-center'>
                    <span className='bg-white  text-black/[0.8] p-2 rounded-full h-10 w-10 block'><i className="fa-brands fa-twitter"></i></span>
                    <span className='bg-white  text-black/[0.8] p-2 rounded-full h-10 w-10 block'><i className="fa-brands fa-telegram"></i></span>
                    <span className='bg-white  text-black/[0.8] p-2 rounded-full h-10 w-10 block'><i className="fa-brands fa-medium"></i></span>
                </div>
            </div>
            <p className='text-xs border-t mt-8 pt-8 text-center'>© 2022 Elon Rabbit | All Rights Reserved</p>
        </footer>
    )
}

export default Footer
