import Image from 'next/image'
import React from 'react'

type Props = {
    imgURL: string,
    name: string,
    description: string
}

export default function SkillsCard({imgURL, name, description}: Props) {
  return (
    <div className='min-h-[250px] backdrop-blur-lg max-w-[350px] min-w-[350px] bg-white/75 shadow-md rounded-md flex flex-col'>
       <Image src={imgURL} alt={name} height={150} width={350} className='max-h-[150px] aspect-square object-cover inset-x-0 rounded-sm shadow-inner' />
       <div className='px-4 space-y-1 pt-2'>
       <h2 className='text-lg font-semibold text-gray-700'>{name}</h2>
       <p className='text-sm text-zinc-700 font-medium'>{description}</p>
       </div>
    </div>
  )
}