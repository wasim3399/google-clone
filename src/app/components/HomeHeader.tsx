import Link from 'next/link'
import React from 'react'
import {TbGridDots} from 'react-icons/tb'

export default function HomeHeader() {
  return (
    <header className=' flex justify-end p-5'>
        <div className=' flex space-x-4 text-xs items-center'>
            <Link className=' hover:underline' href={'google.com'}>Gmail</Link>
            <Link className=' hover:underline' href={'google.com'}>Images</Link>
            <div className=' text-xl hover:bg-gray-200 rounded-full p-2'><TbGridDots></TbGridDots></div>
            <button className=' bg-blue-500 px-6 py-2 rounded-md text-white hover:shadow-lg transition-shadow'>Sign In</button>
        </div>
    </header>
  )
}
