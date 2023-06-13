/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from "next/image";

const Tim = () => {
    const tim = [
        { image: "/bayu.png", name: "Bayu Segara, S.T.", job: "Direktur Utama" },
        { image: "/user.png", name: "Nur Khoiri, S.T.", job: "Direktur" },
        { image: "/user.png", name: "Wahyu Sunardiansyah, S.T.", job: "Arsitek" },
        { image: "/user.png", name: "Irawan Pebrianto, S.T.", job: "Arsitek" },
        { image: "/nabila.png", name: "Nabila Iffati Afanin Putri, S.Ars.", job: "Arsitek" },
        { image: "/user.png", name: "Nur Khoiri, S.T.", job: "Sipil – Bangunan Gedung" },
        { image: "/adib.png", name: "Adib Haekal, S.T.", job: "Sipil – Bangunan Gedung" },
        { image: "/doddy.png", name: "Dr. Doddy Ari Suryanto, S.T., M.T.", job: "Sipil – Transportasi" },
        { image: "/nugraha.png", name: "Nugraha Adi Santosa, S.T.", job: "Sipil – Estimator" },
        { image: "/zenith.png", name: "Zenith Agi Pamungkas, S.T.", job: "Sipil – Struktur" },
        { image: "/user.png", name: "Aditya Ifan Nugraha", job: "Drafter – Sipil, Arsitek" },
        { image: "/user.png", name: "Bagas Risyad Syaifudin", job: "Drafter – Arsitektur" },
        { image: "/novi.png", name: "Novia Salsabila Safitri", job: "ME & Drafter – MEP" },
        { image: "/rohman.png", name: "Rohman Ma'ruf, S.T.", job: "Surveyor-Pemetaan" },
        { image: "/user.png", name: "Megi Wardana", job: "Administrasi" },
        
    ];
    return (
        <section id='tim' className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h5 className="text-orange-600">TIM</h5>
                <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">Susunan Anggota</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Dalam praktik nya, Kami memiliki struktur organisasi dengan keunggulan pada bidangnya masing-masing. Bidang tersebut terbagi menjadi : Arsitek, Manajemen Proyek, Ahli Struktur, Transportasi, Estimator, Drafter, Mechanical & Electrical Engineer , dan Administrasi.</p>
            </div>
            <div className="flex flex-wrap -m-2">
                {tim.map((person, index) => (
                    <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <Image src={person.image} alt='' className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" width={80} height={80}/>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">{person.name}</h2>
                            <p className="text-gray-500">{person.job}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    )
}

export default Tim