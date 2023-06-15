/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Ulasan = () => {
    const kliens = [
        { image: "https://i.ibb.co/VJqkSYy/Logo-UNSOED.png", name: "Universitas Jenderal Soedirman" },
        { image: "https://i.ibb.co/8sYG2ZF/logo-esdm.png", name: "Kementrian ESDM" },
        { image: "https://i.ibb.co/5rpTGtN/logo-banyumas.webp", name: "Dinas Pekerjaan Umum Banyumas" },
        { image: "https://i.ibb.co/vjMnhvH/logo-uin.png", name: "Universitas Islam Negeri Saifuddin Zuhri" },
    ];
    return (
        <section id="ulasan" className="text-gray-600 body-font">
            <div className='container px-5 py-24 mx-auto'>
                <div className="flex flex-col text-center w-full mb-20">
                    <h5 className="text-orange-600">ULASAN</h5>
                    <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
                        Kolaborasi Dengan Klien
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Kami secara aktif melibatkan klien dalam setiap langkahnya, memastikan kebutuhan mereka terpenuhi dan menciptakan solusi yang sesuai dengan visi dan tujuan mereka.
                    </p>
                </div>
                <div className="grid lg:grid-cols-4">
                    {kliens.map((klien, index) => (
                        <div key={index} className="lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img src={klien.image} width={150} height={150} alt='' draggable='false' className="mb-8 object-cover object-center inline-block" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{klien.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Ulasan