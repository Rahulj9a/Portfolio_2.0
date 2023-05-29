'use client'

import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import useLeftSideBar from '@/hooks/useLeftSideBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio | Rahulj9a',
  description: 'Portfolio of Rahul Solanki, a frontend web developer',
}

export default function RootLayout({ children }) {
  //Scroll and close function:
  var lastScrollTop = 0;
  var specificPixel = 50; //how many pixel i want
  const LeftSideBar = useLeftSideBar()
   Window.onscroll = () => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > specificPixel) {
    LeftSideBar.onClose()
    }

    lastScrollTop = scrollTop;
  }
  return (

    <html lang="en">
      
      <body className={`${inter.className} `}>{children} <Footer/></body>
     

    </html>

  )
}
