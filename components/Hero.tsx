import React from 'react'
import SubHeading from '@/components/Subheading';
import images from '@/constants/images';
import Image from 'next/image';
import { Hero } from '@/types';
import urlFor from '@/lib/urlFor';

interface Props {
    heroData: Hero
}
const Hero = ({ heroData }: Props) => {

    return (
        <div className="bg-protienBlack flex justify-between gap-8 items-center min-h-screen flex-col lg:flex-row
        sm:py-16 md:px-24 py-8 px-8 " id="home">
            <div className="flex flex-1 w-full justify-center items-start flex-col gap-6">
                <SubHeading title={heroData.subTitle} />
                <h1 className="font-alkatra text-protienGolden font-bold tracking-wider capitalize 
    text-4xl 2xl:text-9xl  xl:text-8xl sm:text-6xl">
                    {heroData.mainText}
                </h1>
                <p className="font-poppins text-white font-light -tracking-tighter capitalize 
    text-sm 2xl:text-3xl sm:text-base italic">
                    {heroData.paragraphText}
                </p>
                <button type="button" className="bg-protienCrimson text-protienBlack font-alkatra font-bold tracking-wider
    text-base rounded-sm border-none outline-none cursor-pointer py-2 px-6">
                    {heroData.buttonText}
                </button>
            </div>

            <div className="flex flex-1 w-full justify-center items-center ml-8 xl:mt-20">
                <Image
                    // className='w-3/4  xl:w-full'
                    src={urlFor(heroData.bannerImage).url()}
                    alt="app__logo"
                    width={400}
                    height={400}
                />
                {/* <img src={images.welcome} alt="header_img" /> */}
            </div>
        </div>
    )
}

export default Hero