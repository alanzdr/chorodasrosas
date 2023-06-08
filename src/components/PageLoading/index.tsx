import classNames from 'classnames'
import React from 'react'

interface Properties {
  className?: string
}

const PageLoading: React.FC<Properties> = ({ className }) => {
  return (
    <div
      className={classNames(
        'w-full h-screen flex items-center justify-center',
        className
      )}
    >
      <div className="relative w-16 h-16 animate-spin border-solid border-[transparent] border-t-red rounded-full border-[5px] " />
    </div>
  )
}

export default PageLoading
