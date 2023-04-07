
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { groq } from 'next-sanity'
import { fetchData } from '@/lib/fetchData'


export const metadata = {
  title: 'Protien Bytes',
  description: 'A Food Delivery',
}
export const revalidate = 60;
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const storeQuery = groq`
*[_type=='store']{
  ...
}
`

  const storeData = await fetchData(storeQuery)
  return (
    <html lang="en">
      <body >
        <Header storeData={storeData[0]} />
        <main className=''>
          {children}
        </main>
        <Footer storeData={storeData[0]} />
      </body>
    </html>
  )
}
