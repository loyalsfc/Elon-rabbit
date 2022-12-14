import React from 'react'

function HowToBuy() {
    return (
        <div className='z-10 pb-[100px] text-center relative' id='how-to-buy'>
            <h3 data-aos="slide-up" className='text-[3rem] font-russo leading-[120%] mb-4 font-bold text-center'>How To Buy</h3>
            <div className='max-w-[700px] px-2 mx-auto'>
                <article data-aos="zoom-out" className='mb-8'>
                    <h3 className='text-2xl font-semibold my-4 text-orange'>Step One - Buy and Transfer ETH</h3>
                    <p className='text-base font-poppin leading-[150%]'> Buy Ethereum (ETH) from a centralized exchange such as Binance, Coinbase, Hotbit, Crypto.com, etc. Transfer the ETH from the centralized exchange to a wallet like MetaMask or Trust Wallet.
                    </p>
                </article>
                <article data-aos="zoom-out" data-aos-delay="300" className='mb-8'>
                    <h3 className='text-2xl font-semibold my-4 text-orange break-words'>Step Two - Connect to Uniswap</h3>
                    <p className='font-poppin word-wrapping'>First click on the Swap Tokens button in the bottom right of your screen. In the top right, press connect wallet.
                    Ensure you are swapping from ETH to $ElonRabbit, if it doesn't autofill, paste the contract: </p>
                </article>
                <article data-aos="zoom-out" data-aos-delay="600" className=''>
                    <h3 className='text-2xl font-semibold my-4 text-orange'>Step Three - Swap ETH to $ElonRabbit</h3>
                    <p className='font-poppin'>Click on the gear in the top right of the Swap box, and set slippage.
                        Simply click swap, confirm on your wallet and you now have $ElonRabbit!.</p>
                </article>
            </div>
        </div>
    )
}

export default HowToBuy
