import { Inter,Poppins } from 'next/font/google'
import './globals.css'
import css from '@/styles/global.scss'

const inter = Inter({ subsets: ['latin'] })
const popins = Poppins({subsets: ['latin'],weight:["400","500" ],preload: false,})

export const metadata = {
  title: 'Toriqul Islam',
  description: 'Entrepreneur and SEO Expert in Bangladesh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${inter.className} ${popins.className}`}>{children}</body>
    </html>
  )
}
