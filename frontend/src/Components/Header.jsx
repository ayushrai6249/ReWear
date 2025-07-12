import React from 'react'
import { assets } from '../assets/assets'
const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
            {/* Left  */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight md:leading-tight'>Exchange Cloths <br />
                    Reduce Textile Wastes</p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light' >
                    <img className='w-40 rotate-[25deg]' src={assets.rrr} alt="" />
                    <p >Simply browse through our collection of reusable clothes, <br className='hidden sm:block' />
                        swap directly or redeem points — hassle-free and sustainable.</p>
                </div>
                <a href="#categories" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>Browse Items <img className='w-3' src={assets.arrow_icon} alt="" /></a>
            </div>
            {/* Right */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg animate-float' src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header
