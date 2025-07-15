'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from "next/head"
import Image from 'next/image'
const HeaderPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerClasses = `fixed w-full z-30 top-0 text-white transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-lg' : ''
  }`

  const navContentClasses = `w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 p-4 lg:p-0 z-20 transition-all duration-300 ${
    isScrolled ? 'bg-white' : 'bg-white lg:bg-transparent'
  } ${isMenuOpen ? 'block' : 'hidden'}`

  const linkClasses = `inline-block py-2 px-4 no-underline transition-colors duration-300 ${
    isScrolled ? 'text-black font-bold' : 'text-black'
  }`

  const actionButtonClasses = `mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ${
    isScrolled 
      ? 'bg-gradient-to-r from-pink-500 to-yellow-500 text-white' 
      : 'bg-white text-gray-800'
  }`

  return (
    <nav id="header" className={headerClasses}>
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link 
            href="/" 
            className={`no-underline hover:no-underline font-bold text-2xl lg:text-4xl transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            <Image
              src="/asset/logo.svg"
              alt="logo"
              width={62}
              height={62}
              className="inline-block mr-2 align-middle"
              priority
            />
            Riko Cloud Storage
          </Link>
        </div>

        <div className="block lg:hidden pr-4">
          {/* <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button> */}
        </div>

        <div className={navContentClasses}>
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link href="#" className={`${linkClasses} font-bold`}>
                Active
              </Link>
            </li>
            <li className="mr-3">
              <Link href="#" className={`${linkClasses} hover:text-gray-800 hover:underline`}>
                Link
              </Link>
            </li>
            <li className="mr-3">
              <Link href="#" className={`${linkClasses} hover:text-gray-800 hover:underline`}>
                Link
              </Link>
            </li>
          </ul>
          <button className={actionButtonClasses}>
            Action
          </button>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  )
};

const FooterPage = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-black">
            <Link href="/" className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
              <Image
                src="/asset/logo.svg"
                alt="logo"
                width={62}
                height={62}
                className="inline-block mr-2 align-middle"
                priority
              />
              Riko Cloud Storage
            </Link>
          </div>

          {/* <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Links</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</Link>
              </li>
            </ul>
          </div> */}

          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Legal</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</Link>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">instagram</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Github</Link>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Link</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Sign In</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Sign Up</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">ToS</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <p className="text-center p-3 text-black">
          Theme By:{' '}
          <Link href="https://themewagon.com/" className="text-blue-500">
            Themewagon Theme
          </Link>
          {' '}
          Made With 🥱 By:{' '}
          <Link href="https://brownyrollz.com/" className="text-red-500">
            Brownyrollz
          </Link>
        </p>
        
      </div>
    </footer>
  )
}

export { HeaderPage, FooterPage }