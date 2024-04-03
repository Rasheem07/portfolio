import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Facebook, Github, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/lib/reduxSelectors'

type Props = {}

export default function Footer({}: Props) {

  const currentuseTheme = useTheme();

  return (
    <MaxWidthWrapper className={` ${currentuseTheme === "light" ? 'dark-bg' : 'bg-[#d3d3d3]'} min-h-48 shadow-inner flex flex-col items-center py-4`}>
      <div className='w-full flex flex-col items-center'>
     <footer className='flex flex-col md:flex-row gap-6 max-w-xs sm:max-w-none md:gap-0 md:mx-0 justify-between h-full w-full py-8 px-12'>
      <div className="flex flex-col gap-2">
        <h2 className={`text-lg ${currentuseTheme === "light"? 'text-white' : 'text-dark'} font-semibold`}>Contact Information</h2>
        <div className='flex flex-col gap-3'>
            <Link href='/' className={`text-sm ${currentuseTheme === 'light'? 'text-white/90' : 'text-dark' } capitalize hover:scale-105 transition-transform hover:underline underline-offset-2 cursor-pointer`}>mohdrasheem@icloud.com</Link>
            <Link href='/' className={`text-sm ${currentuseTheme === 'light'? 'text-white/90' : 'text-dark' } capitalize hover:scale-105 transition-transform hover:underline underline-offset-2 cursor-pointer`}>mohdrasheem07@gmail.com</Link>
            <Link href='/' className={`text-sm ${currentuseTheme === 'light'? 'text-white/90' : 'text-dark' } capitalize hover:scale-105 transition-transform hover:underline underline-offset-2 cursor-pointer`}>+91 8088153195</Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className={`text-lg ${currentuseTheme === "light"? 'text-white' : 'text-dark'} font-semibold`}>Social Links</h2>
        <div className='flex flex-col gap-3'>
            <Link href='/' className={`text-sm ${currentuseTheme === 'light'? 'text-white/90' : 'text-dark' } capitalize hover:scale-105 transition-transform hover:underline underline-offset-2 cursor-pointer flex items-center`}><Instagram className='h-5 w-5 mr-2 text-pink-600'/>Instagram</Link>
            <Link href='/' className={`text-sm ${currentuseTheme === 'light'? 'text-white/90' : 'text-dark' } capitalize hover:scale-105 transition-transform hover:underline underline-offset-2 cursor-pointer flex items-center`}><Github className='h-5 w-5 mr-2 text-purple-600'/>Github</Link>
            <Link href='/' className={`text-sm ${currentuseTheme === 'light'? 'text-white/90' : 'text-dark' } capitalize hover:scale-105 transition-transform hover:underline underline-offset-2 cursor-pointer flex items-center`}><Twitter className='h-5 w-5 mr-2 text-blue-600'/>Twitter</Link>
            <Link href='/' className={`text-sm ${currentuseTheme === 'light'? 'text-white/90' : 'text-dark' } capitalize hover:scale-105 transition-transform hover:underline underline-offset-2 cursor-pointer flex items-center`}><Facebook className='h-5 w-5 mr-2 text-blue-800'/>Facebook</Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className={`text-lg ${currentuseTheme === "light"? 'text-white' : 'text-dark'} font-semibold`}>Navigation Links</h2>
        <div className='flex flex-col gap-2 pl-2'>
            <Link href='/' className={`text-sm ${currentuseTheme === 'light'? 'text-white/90' : 'text-dark' } capitalize hover:scale-105 transition-transform hover:underline underline-offset-2 cursor-pointer`}>home</Link>
            <Link href='/' className={`text-sm ${currentuseTheme === 'light'? 'text-white/90' : 'text-dark' } capitalize hover:scale-105 transition-transform hover:underline underline-offset-2 cursor-pointer`}>about</Link>
            <Link href='/' className={`text-sm ${currentuseTheme === 'light'? 'text-white/90' : 'text-dark' } capitalize hover:scale-105 transition-transform hover:underline underline-offset-2 cursor-pointer`}>projects</Link>
            <Link href='/' className={`text-sm ${currentuseTheme === 'light'? 'text-white/90' : 'text-dark' } capitalize hover:scale-105 transition-transform hover:underline underline-offset-2 cursor-pointer`}>blogs</Link>
            <Link href='/' className={`text-sm ${currentuseTheme === 'light'? 'text-white/90' : 'text-dark' } capitalize hover:scale-105 transition-transform hover:underline underline-offset-2 cursor-pointer`}>contact</Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className={`text-lg ${currentuseTheme === "light"? 'text-white' : 'text-dark'} font-semibold`}>Policies</h2>
        <div className='flex flex-col gap-2'>
            <Link href='/' className={`text-sm ${currentuseTheme === 'light'? 'text-white/90' : 'text-dark' } capitalize hover:scale-105 transition-transform hover:underline underline-offset-2 cursor-pointer`}>privacy Policy</Link>
            <Link href='/' className={`text-sm ${currentuseTheme === 'light'? 'text-white/90' : 'text-dark' } capitalize hover:scale-105 transition-transform hover:underline underline-offset-2 cursor-pointer`}>terms of service</Link>
            <Link href='/' className={`text-sm ${currentuseTheme === 'light'? 'text-white/90' : 'text-dark' } capitalize hover:scale-105 transition-transform hover:underline underline-offset-2 cursor-pointer`}>Cookie policy</Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className={`text-lg ${currentuseTheme === "light"? 'text-white' : 'text-dark'} font-semibold`}>Recent updates</h2>
        <div className='flex flex-col gap-2'>
            <Link href='/' className={`text-sm ${currentuseTheme === 'light'? 'text-white/90' : 'text-dark' } capitalize hover:scale-105 transition-transform hover:underline underline-offset-2 cursor-pointer`}>Recent Blogs</Link>
            <Link href='/' className={`text-sm ${currentuseTheme === 'light'? 'text-white/90' : 'text-dark' } capitalize hover:scale-105 transition-transform hover:underline underline-offset-2 cursor-pointer`}>Project updates</Link>
            <Link href='/' className={`text-sm ${currentuseTheme === 'light'? 'text-white/90' : 'text-dark' } capitalize hover:scale-105 transition-transform hover:underline underline-offset-2 cursor-pointer`}>Study updates</Link>
            <Link href='/' className={`text-sm ${currentuseTheme === 'light'? 'text-white/90' : 'text-dark' } capitalize hover:scale-105 transition-transform hover:underline underline-offset-2 cursor-pointer`}>stack updates</Link>
        </div>
      </div>
     </footer>
     <span className={`text-[16px] leading-6 mx-auto ${currentuseTheme === "light"? "text-white" : "text-dark"} font-sans`}>&copy; Rasheem&apos;s Portfolio 2024</span>
     </div>
    </MaxWidthWrapper>
  )
}