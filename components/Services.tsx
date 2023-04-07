import { TbTruckDelivery } from 'react-icons/tb'
import { AiFillDollarCircle } from 'react-icons/ai'
import { RiSecurePaymentFill, RiWhatsappFill } from 'react-icons/ri'
import Image from 'next/image'

type Props = {}

const Services = (props: Props) => {



    return (
        <section className={`bg-[url('/assets/bg.png')] bg-no-repeat bg-fixed bg-center bg-cover h-max py-24`} id="services">
            <div className='container mx-auto'>
                <div className='flex justify-between items-center flex-col md:flex-row '>
                    <div className='flex flex-1 justify-center'>
                        <Image src={'/assets/services.png'} alt='Pasta' width={500} height={500} className='' />
                    </div>
                    <div className='text-protienWhite flex flex-1 justify-center flex-col gap-2 mx-4'>
                        <h3 className=''>What we offer ?</h3>
                        <h1 className='text-2xl text-protienGolden'>Take a look at the benifits we offer to you. </h1>
                        <p className='text-md font-light text-protienGrey'>
                            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <div className='grid grid-cols-2 gap-10 my-6'>
                            <div className='flex flex-col gap-2'>
                                <span className='flex items-center justify-center rounded-full w-12 h-12 bg-orange-600'>
                                    <TbTruckDelivery className='w-7 h-7 font-bold' />
                                </span>
                                <h6 className='text-protienGolden font-semibold'>Free Home Delivery</h6>
                                <p className='text-sm text-protienGrey font-light'>Lorem Ipsum has been the industrys</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='flex items-center justify-center rounded-full w-12 h-12 bg-amber-600'>
                                    <AiFillDollarCircle className='w-7 h-7 font-bold' />
                                </span>
                                <h6 className='text-protienGolden font-semibold'>Refund & Return</h6>
                                <p className='text-sm text-protienGrey font-light'>Lorem Ipsum has been the industrys</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='flex items-center justify-center rounded-full w-12 h-12 bg-green-500'>
                                    <RiWhatsappFill className='w-7 h-7 font-bold' />
                                </span>
                                <h6 className='text-protienGolden font-semibold'>Order on Whatsapp</h6>
                                <p className='text-sm text-protienGrey font-light'>Lorem Ipsum has been the industrys</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='flex items-center justify-center rounded-full w-12 h-12 bg-purple-700'>
                                    <RiSecurePaymentFill className='w-7 h-7 font-bold' />
                                </span>
                                <h6 className='text-protienGolden font-semibold'>Online Payments Accepted</h6>
                                <p className='text-sm text-protienGrey font-light'>Lorem Ipsum has been the industrys</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services