'use client'

import React from 'react'
import Link from 'next/link'
import useScrollAnimation from 'hooks/use-scroll-animation'
import classNames from 'classnames'

interface Props {
  single?: boolean
}

const Footer: React.FC<Props> = ({ single }) => {
  const { animate, scrollAnimationRef } = useScrollAnimation()

  return (
    <footer ref={scrollAnimationRef as any} className="py-20">
      <div className="flex flex-col items-center">
        <h2 className={classNames('text-red text-center text-5xl', animate())}>Contato</h2>
        <div className="mt-10 flex flex-col gap-4">
          <a
            href="https://www.instagram.com/chorodasrosas"
            target="_blank"
            rel="noopener noreferrer"
            className={classNames('flex items-center gap-4 transition-colors hover:text-red', animate(1))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            @chorodasrosas
          </a>
          <a
            href="mailto:alandersonzelindrodr@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={classNames('flex items-center gap-4 transition-colors hover:text-red', animate(2))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            alandersonzelindrodr@gmail.com
          </a>
          <a
            href="https://github.com/alanzdr"
            target="_blank"
            rel="noopener noreferrer"
            className={classNames('flex items-center gap-4 transition-colors hover:text-red', animate(3))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            alanzdr
          </a>
        </div>
      </div>
      {single && (
        <Link href="/" className={classNames('flex flex-row items-center gap-1 mx-auto mt-10 w-fit cursor-pointer transition-colors hover:text-red', animate(4))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className='rotate-90'
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
          <p>VOLTAR</p>
        </Link>
      )}
    </footer>
  )
}

export default Footer
