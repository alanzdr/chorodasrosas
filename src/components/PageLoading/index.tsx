import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Properties {
  className?: string
}

const PageLoading: React.FC<Properties> = ({ className }) => {
  return (
    <div
      className={twMerge(
        'flex h-screen w-full items-center justify-center',
        className
      )}
    >
      <div className="relative h-16 w-16 animate-spin rounded-full border-[5px] border-solid border-[transparent] border-t-red" />
    </div>
  )
}

export default PageLoading
