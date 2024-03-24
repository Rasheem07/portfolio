import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

type maxWidthWrapperProps = {
    children: ReactNode;
    className?: string;
}

export default function MaxWidthWrapper({children, className}: maxWidthWrapperProps) {
  return (
    <div className={cn('max-w-[calc(100vw-0.625rem)] sm:max-w-[calc(100vw-5rem)] min-w-full w-full px-2.5 md:px-20' , className)}>
      {children}
    </div>
  )
}
