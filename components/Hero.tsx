import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section id='hero' className='bg-bghero w-full lg:h-[60vh] text-white transition-none'>
            <div className='translate-y-[480px] lg:translate-y-0 translate-x-14 lg:pl-40 lg:pt-24 w-[380px] lg:w-[814px] sm:w-[500px]'>
                <h1 className='text-[37px] font-bold lg:font-extrabold lg:text-6xl lg:tracking-wide leading-tight lg:leading-tight'>Desain Arsitektur Modern dengan Inovasi Lingkungan Terintegrasi</h1>
            </div>
            <div className='bg-bghero w-full -z-10 absolute inset-0 transform skew-y-[5deg] -translate-y-44 lg:-translate-y-32'></div>
            <Link href='#portofolio'>
                <button className='translate-y-[510px] translate-x-[360px] lg:translate-x-52 lg:translate-y-5 transition duration-500 hover:scale-110 sm:translate-y-[600px] sm:translate-x-[550px]'>
                    <Image src='/button_hero.png' width={150} height={150} alt='' draggable='false' />
                </button>
            </Link>
            <Image src='/hero_img.png' width={720} height={10} alt='' className='ml-auto -translate-y-[420px] lg:-translate-y-[600px] lg:-translate-x-0 -mb-40 lg:scale-100 sm:scale-75 sm:-translate-y-[450px] sm:translate-x-[90px]' draggable='false' />
        </section>
    )
}

export default Hero