import React from 'react'
import Image from 'next/image'

const Layanan = () => {
    return (
        <section id='layanan' className="text-gray-600 body-font mt-80">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h5 className='text-orange-600'>LAYANAN</h5>
            <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">Kami Menyediakan Layanan</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lingkup layanan sesuai Nomor Induk Berusaha (NIB) yang diterbitkan pada tanggal 21 Oktober 2020. Perusahaan atau badan usaha yang memiliki NIB diizinkan dan memiliki kewenangan untuk melakukan kegiatan dan layanan yang terkait dengan bidangnya.</p>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <Image src='/consulting.png' width={55} height={55} alt='' draggable='false' className='mx-auto mb-3'/>
                <h2 className="title-font font-medium text-xl text-gray-900">Aktivitas Keinsinyuran dan Konsultasi Teknis YBDI</h2>
                <p className="leading-relaxed">Kode KBLI : 71102</p>
                </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <Image src='/architect.png' width={55} height={55} alt='' draggable='false' className='mx-auto mb-3'/>
                <h2 className="title-font font-medium text-xl text-gray-900">Aktivitas<br/>Arsitektur</h2>
                <p className="leading-relaxed">Kode KBLI : 71101</p>
                </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <Image src='/khusus.png' width={55} height={55} alt='' draggable='false' className='mx-auto mb-3'/>
                <h2 className="title-font font-medium text-xl text-gray-900">Aktivitas Perancangan Khusus</h2>
                <p className="leading-relaxed">Kode KBLI : 74100</p>
                </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <Image src='/dump-truck.png' width={55} height={55} alt='' draggable='false' className='mx-auto mb-3'/>
                <h2 className="title-font font-medium text-xl text-gray-900">Aktivitas Konsultasi Transportasi</h2>
                <p className="leading-relaxed">Kode KBLI : 702020</p>
                </div>
            </div>
            </div>
            <div className='flex justify-center items-center mt-10'>
                <a href="/COMPANY PROFILE JBKONS 2023-1-36.pdf" download>
                    <button className='inline-flex items-center group py-2 px-4 text-zinc-600 transition duration-700 hover:text-black border hover:border-black hover:bg-zinc-100 rounded-lg'>
                        Cek Legalitas Perusahaan Kami
                        <Image src='/unduh-black-thick.png' width={18} height={18} alt='' className='ml-1 opacity-60 group-hover:opacity-100'/>
                    </button>
                </a>
            </div>
        </div>
        </section>
    )
}

export default Layanan