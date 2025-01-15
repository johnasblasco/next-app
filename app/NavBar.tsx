'use client'

import React from 'react'
import Link from 'next/link'
import { AiFillBug } from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

const NavBar = () => {

      const currentPath = usePathname()

      const Links = [
            { label: 'Dashboard', href: '/' },
            { label: 'Issue', href: '/issues' }
      ]


      return (
            <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
                  <Link href={'/'}><AiFillBug /></Link>
                  <ul className='flex space-x-6'>
                        {Links.map(link => <Link key={link.href}
                              className={classNames({
                                    'text-zinc-900': link.href === currentPath,
                                    'text-zinc-500': link.href !== currentPath,
                                    'hover:text-zinc-800 transition-colors': true,
                              })}
                              href={link.href}>{link.label}</Link>)}
                  </ul>
            </nav>

      )
}

export default NavBar