import FullMenu from '@/components/FullMenu'
import Menu from '@/components/Menu'
import { client } from '@/lib/sanity.client'
import urlFor from '@/lib/urlFor'
import { Category } from '@/types'
import { groq } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'

const categoryQuery = groq`
*[_type=='category']{
  ...
} | order(_createdAt desc)
`
const productQuery = groq`
*[_type=='product']{
  ...,
  category->
} | order(_createdAt desc)
`

type Props = {
}

const OurMenu = async (props: Props) => {

  const categories = await client.fetch(categoryQuery);
  const products = await client.fetch(productQuery);
  return (
    <section className='bg-protienBlack'>
      <FullMenu categories={categories} products={products} />
    </section>
  )
}

export default OurMenu