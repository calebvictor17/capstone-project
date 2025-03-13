import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
    <header className='bg-black py-12'> 
        <div className='max-w-[1440px] mx-auto flex justify-between'>
            <nav>
                <ul className='flex gap-16 justify-between text-white position:sticky'>
                    <li><Link href="/" >Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/team">Team</Link></li>
                    <li><Link href="/fixtures">Fixtures</Link></li>
                </ul>
            </nav>
            <div>
                <Image src="/new 1.jpg" alt='sportLogo' width={60} height={100} className='flex justify-center'/>
            </div>
            <nav>
                <ul className='flex gap-16 justify-between text-white position:sticky'>
                    <li><Link href="/shop">Shop</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>


        </div>

    </header>
  )
}

export default Navbar