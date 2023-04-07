"use client"
import urlFor from '@/lib/urlFor'
import { Category, Product } from '@/types'
import { motion } from "framer-motion"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'
import { HiOutlineCheck, HiOutlineSearch } from 'react-icons/hi'
import { HiOutlineChevronUpDown } from 'react-icons/hi2'
import DishCard from './DishCard'
import Link from 'next/link'

interface Props {
    categories: Category[]
    products: Product[]
}

interface SelectCategory {
    name: string,
    categoryImage: string
}


const FullMenu = ({ categories, products }: Props) => {

    const [open, setOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState<SelectCategory>({ name: "All", categoryImage: "" })
    const [searchText, setSearchText] = useState("")
    const [menu, setMenu] = useState(products)

    const pathname = usePathname()

    useEffect(() => {
        if (selectedCategory.name === "All" && !searchText) {
            setMenu(products)
        }
        else if (searchText) {
            if (selectedCategory.name == 'All') {
                let results = products.filter((item) => item.name.toLowerCase().includes(searchText))
                setMenu(results)
            } else {
                let results = products.filter((item) => item.category.name == selectedCategory.name && item.name.toLowerCase().includes(searchText))
                setMenu(results)
            }
        } else if (!searchText) {
            let results = products.filter((item) => item.category.name == selectedCategory.name)
            setMenu(results)
        }
    }, [selectedCategory, searchText])


    console.log(menu.length, "from menucheck")
    const handleCategoryChange = (name: string, image: any) => {

        let categoryImage = ""
        if (image !== "") {
            categoryImage = urlFor(image)?.url()
        }
        setSelectedCategory({ name, categoryImage })
        setOpen(false)
    }

    const handleSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const searchText = e.target.value
        setSearchText(searchText.toLowerCase())
    }

    return (
        <>
            <div className='bg-menuBg bg-no-repeat bg-cover h-max flex justify-center flex-col' >
                <div className='pt-20 text-center'>
                    <h2 className='text-protienCrimson  font-alkatra font-medium text-4xl'>Our Menu</h2>
                    <p className='text-gray-400 text-base'>Some Trendy And Popular Courses Offerd</p>
                </div>
                <div className='w-4/5 mx-auto my-5'>
                    <div className='flex justify-between mt-5 gap-3 flex-wrap flex-col md:flex-row'>
                        <div className='flex flex-1'>
                            <div className="relative my-2 md:w-2/4 w-full">
                                <button
                                    type="button"
                                    onClick={() => setOpen(!open)}
                                    className="relative w-full cursor-pointer rounded-md bg-protienGrey py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-0 focus:outline-none focus:ring-2 focus:ring-protienGolden sm:text-sm sm:leading-6">
                                    {selectedCategory.name === "All" ? <>
                                        <span className="flex items-center">
                                            <span className="ml-3 block truncate">All</span>
                                        </span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                            <HiOutlineChevronUpDown className='w-4 h-4' />
                                        </span></> :
                                        <>
                                            <span className="flex items-center">
                                                <img src={urlFor(selectedCategory?.categoryImage)?.url()} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                                <span className="ml-3 block truncate">{selectedCategory.name}</span>
                                            </span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                <HiOutlineChevronUpDown className='w-4 h-4' />
                                            </span>
                                        </>
                                    }
                                </button>
                                {open &&
                                    <ul className="absolute transition-all duration-500 z-10 mt-2 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        <li
                                            className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9">
                                            <div className="flex items-center" onClick={() => handleCategoryChange("All", "")}>
                                                <span className="font-normal ml-3 block truncate">All</span>
                                            </div>
                                            <span className="text-green-600 absolute inset-y-0 right-0 flex items-center pr-4">
                                                {selectedCategory.name === "All" && <HiOutlineCheck className='w-6 h-6' />}
                                            </span>
                                        </li>
                                        {categories.map((cat) => (
                                            <li
                                                key={cat._id}
                                                className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9">
                                                <div className="flex items-center" onClick={() => handleCategoryChange(cat.name, cat.categoryImage)}>
                                                    <Image src={urlFor(cat.categoryImage).url()}
                                                        alt={cat.name}
                                                        width={500}
                                                        height={500}
                                                        className="h-6 w-6 flex-shrink-0 rounded-full" />
                                                    <span className="font-normal ml-3 block truncate">{cat.name}</span>
                                                </div>
                                                <span className="text-green-600 absolute inset-y-0 right-0 flex items-center pr-4">
                                                    {cat.name === selectedCategory.name && <HiOutlineCheck className='w-6 h-6' />}
                                                </span>
                                            </li>
                                        ))}

                                    </ul>}
                            </div>
                        </div>
                        <div className='flex flex-1 justify-end items-center gap-2 relative'>
                            <div className='w-full md:w-2/4 flex items-center space-x-2 bg-protienGrey py-1 px-3 my-2 rounded-md text-protienCrimson'>
                                <HiOutlineSearch className='h-4 w-4' />
                                <input
                                    value={searchText}
                                    type='search'
                                    className=' outline-none border-none  bg-transparent'
                                    onChange={(e) => handleSearchTerm(e)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-4/5 mx-auto mt-5'>
                <span className='text-white text-xl'>Showing Result For:&nbsp; <span className='text-protienGolden italic '>{searchText || selectedCategory.name}</span></span>
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
            <div className='flex justify-center pb-10' >
                {/* <Link
                    href=""
                    className='py-2 px-3 bg-transparent border border-protienGolden text-protienGolden rounded
                 hover:bg-protienGolden hover:text-protienBlack transition-colors duration-200  text-medium'>
                    Load More
                </Link> */}
            </div>
        </>
    )
}

export default FullMenu