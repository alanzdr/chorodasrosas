import Link from 'next/link'
import React from 'react'

import About from './About'

interface Props {
  single?: boolean
}

const Footer: React.FC<Props> = ({ single }) => {
  return (
    <footer className="mt-20 pb-20">
      <About />
      {single && (
        <div className="mt-16 md:mt-20">
          <Link
            href="/"
            className="mx-auto mt-10 flex w-fit cursor-pointer flex-row items-center gap-1 transition-colors hover:text-red"
          >
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
              className="rotate-90"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            <p>VOLTAR PRA HOME</p>
          </Link>
        </div>
      )}
    </footer>
  )
}

export default Footer
