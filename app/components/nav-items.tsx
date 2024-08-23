'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavItems() {
  const navItems = [
    { name: 'Home', url: '/', key: 'home' },
    {
      name: 'Audio Amplifier Design',
      url: '/amplifier-design',
      key: 'amplifier-design',
    },
    { name: 'Discographer', url: '/disco', key: 'disco' },
    { name: 'About Me', url: '/about', key: 'about' },
    { name: 'Contact Form', url: '/contact', key: 'contact' },
  ]

  const pathname = usePathname()

  return (
    <nav>
      <ul className="nav nav-tabs mx-sm-3 my-2 mt-sm-3 d-print-none">
        {navItems.map((navItem) => {
          return (
            <li className="nav-item" key={`nav-item-${navItem.key}`}>
              <Link
                className={`nav-link ${
                  pathname === navItem.url ||
                  (navItem.url !== '/' && pathname.startsWith(navItem.url))
                    ? 'active'
                    : ''
                }`}
                href={navItem.url}>
                {navItem.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
