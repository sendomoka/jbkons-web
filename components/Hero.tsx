import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section id='hero' className='bg-bghero w-full lg:h-[60vh] text-white'>
            <div className='lg:pl-40 lg:pt-24 lg:w-[814px]'>
                <h1 className='lg:font-extrabold lg:text-6xl lg:tracking-wide lg:leading-tight'>Desain Arsitektur Modern dengan Inovasi Lingkungan Terintegrasi</h1>
            </div>
            <div className='bg-bghero w-full -z-10 absolute inset-0 transform skew-y-[5deg] -translate-y-32'></div>
            <button className='lg:translate-x-52 lg:translate-y-5 transition duration-500 hover:scale-110'>
                <Image src='/button-hero.png' width={150} height={150} alt='' draggable='false' />
            </button>
            <Image src='/hero_img.png' width={720} height={10} alt='' className='lg:ml-auto lg:-translate-y-[600px] lg:-mb-40' draggable='false' />
        </section>
    )
}

export default Hero