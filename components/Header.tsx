'use client'
import { useState } from 'react'
import Image from "next/image"
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import Link from 'next/link';
import { Store } from '@/types';
import urlFor from '@/lib/urlFor';
import { usePathname } from 'next/navigation';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { HiPhone } from 'react-icons/hi2';
import { BsWhatsapp } from 'react-icons/bs';

interface Props {
    storeData: Store
}


function Header({ storeData }: Props) {
    const [toggleMenu, setToggleMenu] = useState(false);
    const pathname = usePathname()
    return (
        <header className="w-full flex justify-between items-center border-b border-protienCrimson/40
         text-protienWhite bg-protienBlack p-4 md:py-4 md:px-8 sticky z-10 top-0">
            <div className="flex justify-start items-center text-white font-alkatra font-bold text-2xl">
                <Image
                    className=''
                    src={urlFor(storeData.logo).url()}
                    alt="app__logo"
                    width={60}
                    height={50}
                />
                {storeData.store_name}
            </div>
            <nav>
                <ul className="lg:flex flex-1 justify-center items-center hidden gap-6">
                    <li className="cursor-pointer font-normal hover:text-protienGrey">
                        {pathname === "/" ? <AnchorLink href="#home">Home</AnchorLink> : <Link href="/">Home</Link>}
                    </li>
                    <li className="cursor-pointer font-normal hover:text-protienGrey">
                        {pathname === "/" ? <AnchorLink href="#services" offset={() => 50}>Services</AnchorLink> : <Link href="/">Services</Link>}
                    </li>
                    <li className="cursor-pointer font-normal hover:text-protienGrey">
                        {pathname === "/" ? <AnchorLink href="#about">About</AnchorLink> : <Link href="/">About</Link>}
                    </li>
                    <li className="cursor-pointer font-normal hover:text-protienGrey">
                        {pathname === "/" ? <AnchorLink href="#ourMenu">Our Menu</AnchorLink> : <Link href="/">Our Menu</Link>}
                    </li>
                    <li className="cursor-pointer font-normal hover:text-protienGrey">
                        {pathname === "/" ? <AnchorLink href="#contact">Contact</AnchorLink> : <Link href="/">Contact</Link>}
                    </li>
                </ul>
            </nav>
            <div className="hidden sm:flex justify-end items-center">
                <Link href={`tel:${storeData.phone}`} className="flex items-center gap-2 capitalize font-normal my-0 mx-4 transition duration-500 hover:border-b border-solid border-protienGolden">
                    <HiPhone className='w-4 h-4' />
                    {storeData.phone}
                </Link>
                <div className='w-px h-7 bg-protienGrey' />
                <Link href={storeData.whatsAppLink} className="flex items-center gap-2 capitalize font-normal my-0 mx-4 transition duration-500 hover:border-b border-solid border-protienGolden">
                    <BsWhatsapp className='w-4 h-4' />
                    Order Now
                </Link>
            </div>
            <div className="lg:hidden flex">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <nav className="fixed top-0 left-0 w-full h-screen bg-protienBlack transition duration-500 flex-col z-50 flex justify-center items-center animate-slide">
                        <MdOutlineRestaurantMenu fontSize={27} className="text-2xl text-protienGolden cursor-pointer absolute top-5 right-5 " onClick={() => setToggleMenu(false)} />
                        <ul className="">
                            <li className='m-8 cursor-pointer text-protienGolden text-3xl text-center hover:text-protienWhite'>
                                <Link href="/" onClick={() => setToggleMenu(false)}>Home</Link>
                            </li>
                            <li className='m-8 cursor-pointer text-protienGolden text-3xl text-center hover:text-protienWhite'>
                                <a href="#services" onClick={() => setToggleMenu(false)}>Services</a>
                            </li>
                            <li className='m-8 cursor-pointer text-protienGolden text-3xl text-center hover:text-protienWhite'>
                                <a href="#about" onClick={() => setToggleMenu(false)}>About</a>
                            </li>
                            <li className='m-8 cursor-pointer text-protienGolden text-3xl text-center hover:text-protienWhite'>
                                <Link href="/ourMenu" onClick={() => setToggleMenu(false)}>Our Menu</Link>
                            </li>
                            <li className='m-8 cursor-pointer text-protienGolden text-3xl text-center hover:text-protienWhite'>
                                <a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    )
}

export default Header