import Image from 'next/image'
import React from 'react'



type Props = {}

const About = (props: Props) => {
    return (
        <section className='bg-black py-24'>
            <div className='md:w-4/5 mx-auto flex justify-between flex-col md:flex-row items-center gap-8'>
                <div className='flex flex-1 flex-col gap-4 px-3' >
                    <h1 className='text-protienCrimson text-2xl'>About Us</h1>
                    <p className='text-protienGrey'>
                        Every business has an origin story worth telling, and usually, one that justifies why you even do business and have clients.
                        Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges, and its vision for the future.
                    </p>
                    <p className='text-protienGrey'>
                        Every business has an origin story worth telling, and usually, one that justifies why you even do business and have clients.
                        Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges, and its vision for the future.
                    </p>
                </div>
                <div className='flex flex-1 justify-center items-center'>
                    <Image src='/assets/gallery02.png' alt="About" width={200} height={200} className='rounded-lg' />
                </div>
            </div>
        </section>
    )
}

export default About