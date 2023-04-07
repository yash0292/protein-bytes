
import '../globals.css'


export const metadata = {
  title: 'Protien Bytes Administration',
  description: 'A Food Delivery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  )
}
