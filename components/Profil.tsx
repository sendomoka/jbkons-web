import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Profil = () => {
    return (
        <section id='profil' className="text-gray-400 bg-bgfooter w-full body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                <Image src='/gather.png' width={720} height={600} alt='' draggable='false' className='object-cover object-center rounded' />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h5 className="text-orange-600">PROFIL</h5>
                    <h1 className="title-font sm:text-3xl text-2xl mb-4 font-semibold text-white">Tentang Perusahaan
                    </h1>
                    <p className="mb-8 leading-relaxed text-justify">Sebagai perusahaan arsitektur yang berpengalaman, kami telah menghadirkan solusi desain yang kreatif dan terpercaya untuk proyek-proyek kami. Dengan pendekatan yang holistik dan keahlian dalam memadukan kebutuhan klien dengan elemen desain yang inovatif, kami berkomitmen untuk menciptakan lingkungan yang memukau dan memenuhi harapan klien kami.</p>
                    <div className="flex justify-center">
                        <Link href='https://wa.me/6282225314338' target='_blank'>
                            <button className='inline-flex items-center group text-gray-400 bg-gray-800 border-0 py-2 px-6 mr-4 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'>
                                Mari Bangun Bersama
                                <Image src='/bangun.png' width={15} height={15} alt='' className='ml-2 opacity-60 group-hover:opacity-100'/>
                            </button>
                        </Link>
                        <a href="/COMPANY PROFILE JBKONS 2023-1-36.pdf" download>
                            <button className='inline-flex items-center group text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                                Unduh CP
                                <Image src='/unduh-white-thick.png' width={18} height={18} alt='' className='ml-1 opacity-90 group-hover:opacity-100'/>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profil