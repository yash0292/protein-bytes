import Image from 'next/image'
import { motion } from "framer-motion"
import { RiWhatsappLine } from 'react-icons/ri'
import { Product } from '../types'
import urlFor from '@/lib/urlFor'

interface Props {
    productItem: Product
}

const DishCard = ({ productItem }: Props) => {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, }}
            transition={{ duration: 0.5 }} className="flex flex-col justify-center">
            <div
                className="relative bg-slate-800 h-max justify-center flex flex-col lg:flex-row space-y-3 md:space-y-0 rounded-xl shadow-lg  mx-auto overflow-hidden">
                <div className="w-full lg:w-1/3  h-auto grid place-items-center bg-protienCrimson">
                    <Image src={urlFor(productItem.image).url()} width={800} height={800} alt="tailwind logo" className="rounded-xl" />
                </div>
                <div className="w-full md:w-2/3  flex flex-col py-2 px-4 justify-between space-y-2">
                    <div className="flex item-center bg-slate-900 w-max absolute top-0 right-0">
                        {productItem.badge && <p className="text-protienCrimson uppercase text-sm font-medium block py-1 px-4">{productItem.badge}</p>}
                    </div>

                    <h3 className="font-medium text-protienGolden md:text-2xl text-lg">{productItem.name}</h3>
                    <p className="text-sm text-protienGrey line-clamp-2">{productItem.description}</p>
                    <p className="text-xl text-protienWhite">
                        &#x20B9; {productItem.price}
                    </p>
                    <div>
                        <a className='flex items-center gap-2 justify-center cursor-pointer bg-protienBlack/50 border border-none hover:bg-protienGolden/50 transition-all duration-200 rounded-lg p-2 text-sm text-protienCrimson'>
                            <RiWhatsappLine className='h-4 w-4 ' />
                            Order Now
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default DishCard