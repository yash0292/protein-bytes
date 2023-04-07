import { previewData } from 'next/headers'
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Menu from '@/components/Menu';
import { groq } from 'next-sanity';
import About from '@/components/About';
import { fetchData } from '@/lib/fetchData';

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
const heroQuery = groq`
*[_type=='hero']{
  ...,
  category->
} | order(_createdAt desc)
`


export default async function Home() {

  const categories = await fetchData(categoryQuery);
  const products = await fetchData(productQuery);
  const heroData = await fetchData(heroQuery);

  if (previewData()) {
    return <div>Preview Mode</div>
  }
  return (
    <>
      <Hero heroData={heroData[0]} />
      <Services />
      <section className='bg-menuPattern bg-no-repeat bg-cover min-h-[500px] bg-fixed'>
        <Menu categories={categories} products={products} productPerPage={6} />
      </section>
      <About />
    </>
  )
}
