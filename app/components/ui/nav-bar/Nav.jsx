'use client'
import React from 'react'
import Link from 'next/link'
import "./nav.css"
import { usePathname, useRouter } from 'next/navigation'



const Nav = () => {
  const path=usePathname()
  
  const router=useRouter()
  console.log(path==="/auth/login")


  return (
  
  <div className={path==="/auth/login"?"nav-none":"nav-main"}>
  <div className="relative pt-6 pb-16 sm:pb-24">
    <nav
      className="relative flex items-center justify-between sm:h-10 md:justify-center"
      aria-label="Global"
    >
      <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="#" className='logo'>
            P-For-Program
           
          </Link>
          <div className="flex items-center -mr-2 md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
              type="button"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:space-x-10 list-none">
        <li>
          <Link
            href="#"
            className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
            target=""
          >
         Home
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
            target=""
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
            target="_blank"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
            target="_blank"
          >
            Services
          </Link>
        </li>
      </div>
      <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
        <div className="inline-flex rounded-full shadow">
          <div
            href="#"
            className="nav-btn"
          >
            Sign in
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>

  
  )
}

export default Nav
