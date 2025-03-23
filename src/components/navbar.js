import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <header className="bg-black  fixed w-full   z-50 mt-5 shadow-md ">
      <div className=" mx-auto flex items-center justify-between py-4 px-5">
        <nav className="hidden md:block  gap-8">
          <ul className="flex gap-16 justify-between text-white ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/fixtures">Fixtures</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-center ">
          <Image
            src="/foot-logo-img.jpeg"
            alt="sportLogo"
            width={50}
            height={50}
            
          />
          <h3 className="font-semibold text-lg bg-white ml-5 flex items-center justify-center ">
            USMAN FC
          </h3>
        </div>
        <nav className="hidden md:block gap-8">
          <ul className="flex gap-16 justify-between text-white position:sticky">
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
