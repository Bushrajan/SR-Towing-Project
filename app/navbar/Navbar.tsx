'use client'
import { useState } from 'react'
import Link from 'next/link'

const ToggleLinks = () => {
  const [showLinks, setShowLinks] = useState(false)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <div className=''>
      <button
        onClick={toggleLinks}
        className='btn btn-primary access-item  border p-2 ms-2 toggle'
      >
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          className=''
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5'
            stroke='white'
            stroke-opacity='0.83'
            stroke-width='1.66667'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </button>
      {showLinks && (
        <div className='mt-5 toggle-links-div'>
          
          <Link href='#' className='ms-10 toggle-links text-white'>
            Services
          </Link>
          <br />
          <Link href='#' className='ms-10 toggle-links text-white'>
            Light / Medium
          </Link>
          <br />
          <Link href='#' className='ms-10 toggle-links text-white'>
            Heavy Duty
          </Link>
          <br />
          <Link href='#' className='ms-10 toggle-links text-white'>
            Gallery
          </Link>
          <br />
          <Link href='#' className='ms-10 toggle-links text-white'>
            About Us
          </Link>
          <br />
        </div>
      )}
    </div>
  )
}

export default ToggleLinks
