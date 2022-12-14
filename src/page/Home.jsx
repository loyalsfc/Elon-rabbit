import React from 'react'
import Header from './Header'
import animation from '../assets/giphy.gif'
import rabbit from '../assets/rabbit.jpeg'
import elonmusk from '../assets/elonmusk.jpeg'
import Footer from './Footer'
import HowToBuy from './HowToBuy'


function Home() {
  return (
    <div>
        <div className='h-screen w-full relative'>
            <div className='fixed h-screen w-full overflow-hidden -z-10 opacity-25'>
                <img src={animation} alt="" className='md:w-full h-[150%] md:h-auto' />
            </div>
            <Header />
            <section className=''>
                <div className="container mx-auto h-calc flex items-center justify-center">
                    <article className=' text-center font-medium flex flex-col justify-center items-center gap-4'>
                        <h3 data-aos="slide-up" className='font-russo text-[50px] leading-[150%]'>Elon Musk asks you FOLLOW</h3>
                        <h1 data-aos="slide-up" className='font-russo text-[50px] leading-[150%] font-bold'>"ELON RABBIT"</h1>
                        <h3 data-aos="slide-up" className='text-2xl'>So that we can go to the moon together</h3>
                        <p  data-aos="slide-up"className='text-lg'>Elon Rabbit is about to change the crypto future</p>
                        <div data-aos="slide-up" className='flex gap-4 font-medium'>
                            <button className='bg-gradient px-10 h-12 flex items-center rounded-full'>Telegram</button>
                            <button className='bg-gradient px-10 h-12 flex items-center rounded-full'>Charts</button>
                        </div>
                    </article>
                </div>
            </section>
            <main className='bg-gradient-to-b  from-black/[0] to-black'>
                <div className="container mx-auto px-4">
                    <section className='flex items-center  pb-[100px]'>
                        <div data-aos="zoom-in" className='w-1/2 p-8 lg:p-16 hidden md:block flex justify-end'>
                            <img src={rabbit} alt="" className='lg:w-3/4 rounded-3xl'/>
                        </div>
                        <article className='text-xl md:w-1/2 md:pr-16 leading-[170%]'>
                            <h2 data-aos="fade-in" data-aos-delay="10" className='font-russo text-[3rem] leading-[120%] mb-8 font-semibold text-center md:text-left'>About</h2>
                            <p data-aos="fade-in" data-aos-delay="250" className='mb-4'>It was the day  "Elon rabbit" token has been created to change the future of the meme world.</p> 
                            <p data-aos="fade-in" data-aos-delay="500">This will be carried out with the help of our meme-loving community members, massive marketing campaigns,  and hard-working and transparent team members</p>
                        </article>
                    </section>
                </div>
            </main>
            <main className='bg-black'>
                <div className="container mx-auto px-4">
                    <section className='pb-[100px]' id='tokenomics'>
                        <h2 data-aos="zoom-in" class="font-russo text-[3rem] leading-[120%] mb-8 font-semibold text-center">Tokenomics</h2>
                        <div class="bg-just md:w-1/2 lg:w-[35%] p-9 pt-[53px] rounded-2xl mx-auto">
                            <div class=" flex flex-col gap-5">
                                <p data-aos="slide-up" class="paragraph small">Total Supply: 100,000,000<br/>‍<br/><br/> - 3% Buy Tax<br/> - 5% Sell Tax<br/></p>
                                <a href="#" data-aos="fade-in" target="_blank" className="border rounded-full h-10 flex items-center w-fit px-6 hover:shadow-md hover:shadow-white">
                                    <span class="button-text">Etherscan</span>
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className='pb-[100px]'>
                        <h2 data-aos="zoom-in" className='font-russo text-[2rem] leading-[120%] mb-8 font-semibold text-center '>Is Elon Rabbit The Next Bitcoin?</h2>
                        <p data-aos="zoom-in" className='text-center'><i>"ON DECEMBER 13, 2022, ELON MUSK POSTED "FOLLOW 🐰" ON HIS TWITTER ACCOUNT"</i></p>
                        <img data-aos="zoom-in" src={elonmusk} alt="" className='mx-auto mt-8 hover:scale-110 transition-all' />
                    </section>
                </div>
            </main>
            <main>
                <div className="container mx-auto px-4 md:px-0 py-[100px]">
                    <h2 data-aos="zoom-in" className='font-russo text-[2rem] leading-[120%] mb-8 font-semibold text-center'>ROADMAP</h2>
                    <div data-aos="slide-up" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        <RoadmapItem>
                            <h2 className='font-semibold text-2xl mb-4'>1. The Beginning</h2>
                            <ul className='text-lg leading-[200%] list-disc'>
                                <li>Contract Development</li>
                                <li>Community Group</li>
                                <li>AMA's and Global Exposure</li>
                                <li>Lunacrush/Stockwits listing</li>
                                <li>Setting up 100 shillers</li>
                                <li>Facebook & tiktok campaign</li>
                                <li>5000 Community members</li>
                                <li>1000 Elon rabbit Holders</li>
                            </ul>
                        </RoadmapItem>
                        <RoadmapItem>
                            <h2 className='font-semibold text-2xl mb-4'>2. Growth</h2>
                            <ul className='text-lg leading-[200%] list-disc'>
                                <li>Influencer & Dextools Marketing</li>
                                <li>Coingecko Listing</li>
                                <li>Coinmarketcap Listing</li>
                                <li>CRO & Poocoin Trending</li>
                                <li>Trust Wallet Integration</li>
                                <li>5000 ElonRabbit Hodlers</li>
                                <li>Third Party Audit by CTK</li>
                                <li>ElonRabbit Discord Setup</li>
                            </ul>
                        </RoadmapItem>
                        <RoadmapItem>
                            <h2 className='font-semibold text-2xl mb-4'>3. Launching</h2>
                            <ul className="text-lg leading-[200%] list-disc">
                                <li>Website 2.0</li>
                                <li>Launch On MultiSwap Bridge</li>
                                <li>NFT Collaborations</li>
                                <li>NFT Marketing Campaign</li>
                                <li>Bitmart Exchange Listing</li>
                                <li>P2E Development & Showcase</li>
                                <li>10000 ElonRabbit Hodlers</li>
                            </ul>
                        </RoadmapItem>
                        <RoadmapItem>
                        <h2 className='font-semibold text-2xl mb-4'>4. Launching</h2>
                            <ul className="text-lg leading-[200%] list-disc">
                                <li>Official ElonRabbit Merchandise</li>
                                <li>Twitch & International Marketing</li>
                                <li>25000 ElonRabbit Hodlers</li>
                                <li>Official ElonRabbit Decentralised Exchange</li>
                                <li>Large Influencer Parternships & AMA’s</li>
                                <li>ElonRabbit Launchpad</li>
                            </ul>
                        </RoadmapItem>
                    </div>
                </div>
            </main>
            <article className='bg-gradient-to-b  from-black/[0] to-black'>
                <HowToBuy />
            </article>
            <Footer />
        </div>
    </div>
  )
}

function RoadmapItem({children}){
    return(
        <div className='border border-white bg-white/[0.2] backdrop-blur p-8'>
            {children}
        </div>
    )
}

export default Home

// "transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1;"