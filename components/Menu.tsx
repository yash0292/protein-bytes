'use client'
import { motion } from "framer-motion"
import React, { useState, useEffect } from 'react'
import DishCard from './DishCard'

import Link from "next/link"
import { Category, Product } from "@/types"
import Image from "next/image"
import urlFor from "@/lib/urlFor"
import { usePathname } from "next/navigation"

interface Props {
    productPerPage: number,
    categories: Category[],
    products: Product[]
}

const Menu = ({ productPerPage, products, categories }: Props) => {
    const [category, setCategory] = useState("All");
    const [menu, setMenu] = useState(products)

    const pathname = usePathname()
    useEffect(() => {
        if (category === "All") {
            setMenu(products)
        } else {
            const results = products.filter((product) => {
                return product.category.name === category
            })
            setMenu(results)
        }
    }, [category])

    return (
        <div className='flex justify-center items-center flex-col px-3 md:px-0 md:w-4/5 mx-auto py-24' id="ourMenu">
            <h1 className='text-4xl text-protienCrimson font-alkatra tracking-[0.08]'>Our Menu</h1>
            <div className='py-6 px-2 flex gap-5 overflow-x-auto flex-1 whitespace-nowrap items-center w-full  xl:mx-auto mx-2 md:justify-center'>
                {categories.map((cat) => (
                    <button
                        key={cat._id}
                        type='button'
                        className={`${cat.name === category ? "bg-protienGolden" : "bg-transparent"} lg:flex items-center gap-2 py-2 px-3 border border-protienGolden text-center 
                        text-protienWhite rounded-xl hover:bg-protienGolden transition-colors duration-300 font-medium text-sm`}
                        onClick={() => setCategory(cat.name)}
                    >
                        <Image className="w-8 h-8 rounded-full hidden lg:inline" src={urlFor(cat.categoryImage).url()} alt={cat.name} width={100} height={100} />
                        {cat.name}
                    </button>
                ))}
            </div>
            {menu.length > 0 ? <div className='grid md:grid-cols-2 w-full sm:w-4/5 mx-auto gap-8 my-16'>
                {menu.map((dish) => (
                    <DishCard productItem={dish} key={dish._id} />
                ))}
            </div> :
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='flex items-center justify-center min-h-[200px]'>
                    <span className='text-2xl text-protienGolden font-alkatra'>No Item Found </span>
                </motion.div>}
            <Link
                href="/ourMenu"
                className='py-2 px-3 bg-transparent border border-protienGolden text-protienGolden rounded
                 hover:bg-protienGolden hover:text-protienBlack transition-colors duration-200  text-medium'>
                View All
            </Link>
        </div>
    )
}

export default Menu