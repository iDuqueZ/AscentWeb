import React from 'react'

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-zinc-900 border-b-2 border-b-black p-4">
        <div className='flex w-full items-center flex-shrink-0 justify-between text-white mr-6'>
            <span className="font-semibold text-xl tracking-tight">Ascent</span>
            <ul className="flex">
                <li className="mr-6">
                    <a className="text-white hover:text-gray-200" href="/">Home</a>
                </li>
                <li className="mr-6">
                    <a className="text-white hover:text-gray-200" href="/about">About</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
