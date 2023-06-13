'use client'
import React, { useState } from "react";
import Image from "next/image";

const Portofolio = () => {
    const cards = [
        {
        img: "/p/farm_.png",
        year: "2021",
        title: "Perencanaan EXFARM - Fakultas Peternakan Unsoed",
        place: "Karangwangkal - Purwokerto",
        },
        {
        img: "/p/masterplanfisip.png",
        year: "2021",
        title: "Perencanaan Masterplan - FISIP Unsoed",
        place: "Grendeng, Purwokerto",
        },
        {
        img: "/p/merapi.png",
        year: "2021",
        title:
            "Perencanaan Pengembangan Pos Pengamatan G. Merapi - PVMBG, Badan Geologi, Kementrian ESDM",
        place: "Kaliurang, Sleman, Daerah Istimewa Yogyakarta",
        },
        {
        img: "/p/umkm.png",
        year: "2021",
        title:
            "Perencanaan Sentra Kuliner dan UMKM Banyumas - Dinas Pekerjaan Umum Kab. Banyumas",
        place: "Purwokerto, Banyumas, Jawa Tengah",
        },
        {
        img: "/p/uin.png",
        year: "2021",
        title: "Perencanaan Gerbang Utama - UIN SAIZU Purwokerto",
        place: "Purwokerto, Banyumas, Jawa Tengah",
        },
        {
        img: "/p/abdul.png",
        year: "2021",
        title:
            "Perencanaan Pondok Pesantren Abdul Djamil - Nahdlatul Ulama Purwokerto",
        place: "Banyumas, Jawa Tengah",
        },
        {
        img: "/p/registrasi.png",
        year: "2021",
        title: "Perencanaan Gedung Registrasi - Unsoed",
        place: "Purwokerto, Banyumas, Jawa Tengah",
        },
        {
        img: "/p/rsi.png",
        year: "2021",
        title: "Perencanaan Pelayanan Kesehatan - Rumah Sakit Islam Purwokerto",
        place: "Purwokerto, Banyumas, Jawa Tengah",
        },
        {
        img: "/p/fpik.png",
        year: "2021",
        title: "Perencanaan Masterplan - Fakultas Perikanan dan Ilmu Kelautan Unsoed",
        place: "Cilacap, Jawa Tengah",
        },
        {
        img: "/p/landscape.png",
        year: "2021",
        title: "Perencanaan Pra Desain Landscape Area Pabrik - PT. CPI",
        place: "Purbalingga, Jawa Tengah",
        },
        {
        img: "/p/polsek.png",
        year: "2022",
        title: "Perencanaan Bangunan - Polsek Purwokerto Utara",
        place: "Purwokerto, Banyumas, Jawa Tengah",
        },
        {
        img: "/p/haritanickel.png",
        year: "2022",
        title: "Perencanaan Kantor - Harita Nickel Ternate",
        place: "Ternate, Maluku Utara",
        },
        {
        img: "/p/kedokterankalibakal.png",
        year: "2022",
        title: "Perencanaan Pra Desain - Fakultas Kedokteran Unsoed Kampus Kalibakal",
        place: "Kalibakal, Purwokerto",
        },
        {
        img: "/p/kedokterancilacap.png",
        year: "2022",
        title: "Perencanaan Pra Desain - Fakultas Kedokteran Unsoed Kampus Cilacap",
        place: "Cilacap, Jawa Tengah",
        },
        {
        img: "/p/hibualamo.png",
        year: "2022",
        title: "Perencanaan Gedung Serbaguna - Hibualamo",
        place: "Pulau Obi, Maluku Utara",
        },
        {
        img: "/p/mipa.png",
        year: "2022",
        title: "Perencanaan Gedung - FMIPA Unsoed",
        place: "Grendeng, Purwokerto",
        },
        {
        img: "/p/fapet.png",
        year: "2022",
        title: "Perencanaan Gedung - Fakultas Peternakan Unsoed",
        place: "Grendeng, Purwokerto",
        },
        {
        img: "/p/fib.png",
        year: "2022",
        title: "Perencanaan Masterplan - FIB Unsoed",
        place: "Grendeng, Purwokerto",
        },
        {
        img: "/p/sindoro.png",
        year: "2022",
        title: "Perencanaan Pengembangan Pos Pengamatan G. Sindoro Sumbing - PVMBG, Badan Geologi, Kementrian ESDM",
        place: "Temanggung, Jawa Tengah",
        },
        {
        img: "/p/pulauobi.png",
        year: "2023",
        title: "Perencanaan Kawasan Eco Village - Harita Nickel Pulau Obi",
        place: "Pulau Obi, Maluku Utara",
        },
    ];
    const [visible, setVisible] = useState(8);

    const showMoreCards = () => {
        setVisible((prevValue) => prevValue + 8);
    };

    return (
        <section id="portofolio" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h5 className="text-orange-600">PORTOFOLIO</h5>
            <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
                Portofolio Proyek
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Kami telah berhasil menghadirkan solusi desain yang inovatif dan
                fungsional untuk klien-klien kami. Beberapa proyek yang sudah
                dikerjakan antara lain.
            </p>
            </div>
            <div className="flex flex-wrap -m-4">
            {cards.slice(0, visible).map((card, index) => (
                <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full border-b">
                <a className="block relative h-48 rounded overflow-hidden">
                    <Image
                    width={421}
                    height={261}
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={card.img}
                    />
                </a>
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {card.year}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                    {card.title}
                    </h2>
                    <p className="mt-1">{card.place}</p>
                </div>
                </div>
            ))}
            </div>
            {visible < cards.length && (
            <div className="flex justify-center items-center mt-10">
                <button
                onClick={showMoreCards}
                className="inline-flex items-center group py-2 px-4 text-zinc-600 transition duration-700 hover:text-black border hover:border-black hover:bg-zinc-100 rounded-lg"
                >
                Lihat Lebih Banyak
                <Image
                    src="/unduh-black-thick.png"
                    width={18}
                    height={18}
                    alt=""
                    className="ml-1 opacity-60 group-hover:opacity-100"
                />
                </button>
            </div>
            )}
        </div>
        </section>
    );
};

export default Portofolio;
