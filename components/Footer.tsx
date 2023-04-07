import urlFor from '@/lib/urlFor'
import { Store } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { HiOutlineMapPin, HiPhone } from 'react-icons/hi2'
import { MdOutlineEmail } from 'react-icons/md'

type Props = {
    storeData: Store
}

const Footer = ({ storeData }: Props) => {
    return (
        <footer className='bg-protienBlack h-max py-24'>
            <div className=' w-4/5 mx-auto'>
                <div className='grid md:grid-cols-2 text-protienCrimson gap-12'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center space-x-2'>
                            <Image
                                className=''
                                src={urlFor(storeData.logo).url()}
                                alt="app__logo"
                                width={70}
                                height={70}
                            />
                            <h1 className='text-2xl md:text-4xl font-alkatra'>{storeData.store_name}</h1>
                        </div>
                        <address className='flex space-x-2 items-center mt-4'>
                            <HiOutlineMapPin className='h-4 w-4' />
                            <p>{storeData.address}</p>
                        </address>
                        <Link href={`tel:${storeData.phone}`} className='flex items-center gap-2'>
                            <HiPhone className='w-4 h-4' />
                            {storeData.phone}
                        </Link>
                        <Link href={`mailto:${storeData.email}`} className='flex items-center gap-2'>
                            <MdOutlineEmail className='w-4 h-4' />
                            {storeData.email}
                        </Link>
                    </div>
                    <div className='flex flex-col gap-4 md:place-items-end'>
                        <h2 className='text-xl'>Get In Touch</h2>
                        <div className='flex items-start gap-4 my-5'>
                            <Link href={storeData.facebook} className="p-1 font-bold hover:bg-protienGolden hover:text-protienBlack rounded-lg bg-transparent border border-protienGolden text-protienGolden">
                                <AiOutlineFacebook className='w-6 h-6' />
                            </Link>
                            <Link href={storeData.instagram} className="p-1 font-bold hover:bg-protienGolden hover:text-protienBlack rounded-lg bg-transparent border border-protienGolden text-protienGolden">
                                <AiOutlineInstagram className='w-6 h-6' />
                            </Link>
                            <Link href={storeData.whatsAppLink} className="p-1 font-bold hover:bg-protienGolden hover:text-protienBlack rounded-lg bg-transparent border border-protienGolden text-protienGolden">
                                <AiOutlineWhatsApp className='w-6 h-6' />
                            </Link>
                        </div>
                        <div className='flex flex-col gap-3 md:items-end'>
                            <Image src={"/assets/fassaiLogo.png"} alt='fassai logo' width={80} height={50} className='bg-white' />
                            <span className='text-sm text-protienGrey font-normal'>License number- {storeData.license_number}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer