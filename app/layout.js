'use client'

import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import useLeftSideBar from '@/hooks/useLeftSideBar'
import { QueryClient, QueryClientProvider } from 'react-query'

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
  window.onscroll = () => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > specificPixel) {
      LeftSideBar.onClose()
    }

    lastScrollTop = scrollTop;
  }
  const queryClient = new QueryClient()
  return (

    <html lang="en">
      <QueryClientProvider client={queryClient}>

        <body className={`${inter.className} bg-custom2`}> <Header />{children} </body>
      </QueryClientProvider>

    </html>

  )
}
