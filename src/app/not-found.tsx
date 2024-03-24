import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import React from 'react'
import { NotebookIcon } from 'lucide-react';

export default function Page() {
  return (
    <MaxWidthWrapper className='flex flex-col items-center justify-center mt-40 mb-80 pb-20'>
       <div className='flex flex-col justify-center items-center mx-auto'>
          <NotebookIcon />
          <h2 className='text-xl font-semibold text-zinc-900'>Page not found!</h2>
          <Link href='/intro front end ceritficate.jpeg' className='text-blue-600 underline underline-offset-2 font-medium mt-2'>back to home</Link>
       </div>
    </MaxWidthWrapper>
  )
}
