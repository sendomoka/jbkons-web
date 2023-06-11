import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer id='kontak' className='bg-bgfooter w-full p-5 xl:p-16 flex flex-col xl:flex-row text-textfooter'>
            <div className='xl:flex xl:flex-row'>
                <Image src='/harita.jpg' width={537} height={288} alt='Harita' className='mx-auto xl:pt-0 xl:h-[306px] xl:w-[221px] xl:object-none'/>
                <div className='xl:flex xl:flex-col xl:ml-10 xl:w-[261px]'>
                    <Image src='/logo-white.png' width={166} height={45.16} alt='Logo JBKons' className='mx-auto mt-10 mb-5 xl:ml-auto xl:mb-3 xl:mt-6' />
                    <p className='font-semibold text-center text-sm'>KONSULTAN PERENCANAAN DAN PENGAWASAN</p>
                    <p className='text-justify mt-6 text-sm text-zinc-400'>Percayakan desain bangunan pada JBKons, konsultan arsitektur modern dengan sentuhan alam yang brilian untuk hasil yang berkesan!</p>
                    <div className='mx-auto xl:ml-0 flex flex-row justify-center items-center'>
                        <Link href='https://www.instagram.com/jbkons.id/' target='_blank'>
                            <button className='mt-5 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-700 hover:scale-105'>
                                <Image src='/ig.png' width={108} height={40} alt='Instagram JBKons' />
                            </button>
                        </Link>
                        <Link href='https://indokontraktor.com/business/pt-joglomas-brilian-konsultan' target='_blank' className='ml-3'>
                            <button className='mt-5 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-700 hover:scale-105'>
                                <Image src='/ik.png' width={141.6} height={40} alt='IndoKontraktor JBKons' />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='mt-10 xl:ml-20 xl:mt-6 xl:w-[800px]'>
                <p className='font-semibold text-2xl border-b-2 border-[#6366f1] w-fit mb-6'>KONTAK KAMI</p>
                <p className='text-sm text-justify xl:text-start hover:text-[#6366f1] border-l-2 border-[#6366f1] pl-4 mb-3'>Alamat : Jalan Gerilya Gang II Nomor 26 Purwokerto, Kel. Tanjung, Kec. Purwokerto Selatan, Kab. Banyumas, Prov. Jawa Tengah 53144</p>
                <p className='text-sm hover:text-[#6366f1] border-l-2 border-[#6366f1] pl-4 mb-3'>No. Telepon : (+62) 82225314338</p>
                <p className='text-sm hover:text-[#6366f1] border-l-2 border-[#6366f1] pl-4 mb-3'>Email : pt.jbkons@gmail.com</p>
                <p className='text-sm mt-10 text-zinc-400 text-center xl:text-start'>© 2023 PT. Joglomas Brilian Konsultan. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer