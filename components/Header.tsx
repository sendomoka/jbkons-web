/* eslint-disable react/jsx-key */
import Link from 'next/link'
import Image from 'next/image'
import React from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
    const menus = [
        { href: "#layanan", text: "Layanan" },
        { href: "#portofolio", text: "Portofolio" },
        { href: "#profil", text: "Profil" },
        { href: "#tim", text: "Tim" },
        { href: "#ulasan", text: "Ulasan" },
        { href: "#kontak", text: "Kontak" },
    ];
    return (
        <header className="sticky top-0 z-30 w-full bg-white shadow text-black text-sm p-3 md:px-auto flex flex-row">
            <div>
                <Link href='/'>
                <Image src='/logo-red.png' width={136} height={37} alt='Logo JBKons PT JOGLOMAS BRILIAN KONSULTAN'/>
                </Link>
            </div>            
            <nav className="hidden md:mr-auto md:ml-4 md:pt-2 md:pl-3 md:border-l md:border-gray-400 flex-wrap md:block items-center text-sm text-zinc-600 font-medium justify-center">
                <ul className="flex">
                    {menus.map((menu, index) => (
                    <li key={index}>
                        <Link href={menu.href} className="py-3 px-4 transition duration-300 hover:text-black hover:bg-zinc-100 rounded-sm">
                        {menu.text}
                        </Link>
                    </li>
                    ))}
                </ul>
            </nav>
            <a href="/COMPANY PROFILE JBKONS 2023-1-36.pdf" download>
                <button className='hidden md:inline-flex items-center group py-2 px-4 text-zinc-600 transition duration-700 hover:text-black border hover:border-black hover:bg-zinc-100 rounded-lg'>
                    Unduh CP
                    <Image src='/unduh-black-thick.png' width={18} height={18} alt='' className='ml-1 opacity-60 group-hover:opacity-100'/>
                </button>
            </a>
            <Link href='https://wa.me/6282225314338' target='_blank'>
                <button className='hidden md:inline-flex items-center group py-2 px-4 ml-3 transition duration-700 text-white hover:text-zinc-300 border border-zinc-900 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-700 rounded-lg'>
                    Mari Bangun Bersama
                    <Image src='/bangun.png' width={15} height={15} alt='' className='ml-2 opacity-100 group-hover:opacity-60'/>
                </button>
            </Link>
            <div className='inline-flex md:hidden ml-auto'>
                <a href="/COMPANY PROFILE JBKONS 2023-1-36.pdf" download>
                    <button className='inline-flex md:hidden items-center group pt-[9.5px] pb-[9.5px] px-3 mt-1 ml-8 text-xs text-zinc-600 transition duration-700 hover:text-black border hover:border-black hover:bg-zinc-100 rounded-lg'>
                    Unduh CP
                        <Image src='/unduh-black-thick.png' width={14} height={14} alt='' className='ml-1 opacity-60 group-hover:opacity-100'/>
                    </button>
                </a>
                <Link href='https://wa.me/6282225314338' target='_blank'>
                    <button className='inline-flex md:hidden items-center group pt-[9.5px] pb-[9.5px] px-3 mt-1 ml-1 text-xs text-white transition duration-700 hover:text-zinc-300 border border-zinc-900 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-700 rounded-lg'>
                    Ayo Bangun
                        <Image src='/bangun.png' width={12} height={12} alt='' className='ml-2 opacity-100 group-hover:opacity-60'/>
                    </button>
                </Link>
                {/* Hamburger Mobile Only */}
                <div className='mt-1 ml-3'>
                    <DropdownMenu>
                        <DropdownMenuTrigger><Image src='/strip-3-shadow.png' width={37} height={37} alt=''/></DropdownMenuTrigger>
                        <DropdownMenuContent className='-translate-x-3 translate-y-5'>
                            <DropdownMenuLabel>Menu</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {menus.map((menu, index) => (
                                <Link href={menu.href}>
                                    <DropdownMenuItem key={index}>{menu.text}</DropdownMenuItem>
                                </Link>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                {/* End - Hamburger Mobile Only */}
            </div>
        </header>
    )
}

export default Header