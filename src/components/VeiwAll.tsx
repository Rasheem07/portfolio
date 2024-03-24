import { ChevronRight } from 'lucide-react'
import React from 'react'

type Props = {}

export default function VeiwAll({}: Props) {
  return (
    <div className="rounded-md hover:shadow-md hover:border border-zinc-500 h-[200px] w-[250px] object-contain aspect-square flex flex-row items-center justify-center hover:border-zinc-500">
    <div className="flex items-center gap-1">
      <p className="text-lg text-zinc-900 font-semibold">Veiw All</p>
      <ChevronRight className="h-9 w-8 text-gray-900" />
    </div>
  </div>
  )
}