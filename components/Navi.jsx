"use client"
import Link from "next/link";
import { useState } from "react";
import { RxDropdownMenu } from "react-icons/rx";
import { ImMenu4 } from "react-icons/im";

import NavList from "./NavList";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  function toggleMenu() {
    return setMenu(!menu);
  }
  return (
    <header className="bg-black relative pt-0 pr-2 pb-0 pl-2">
      <nav className="w-full max-w-screen-xl h-16 flex justify-between items-center">

        <div>

          <Link href="/" className="text-amber-50 text-2xl">Logo</Link >
        </div>
        <NavList varClass={"hidden sm:flex gap-8 text-amber-50 justify-around"} />
        {menu ? (<><NavList varClass={"sm:flex gap-8 text-blue-300 justify-around"} /> 
          <div>
            <ImMenu4 className="text-amber-300" onClick={toggleMenu} />
          </div></>) : (<div className="block sm:hidden">
            <RxDropdownMenu className="text-amber-300" onClick={toggleMenu} />
          </div>)
        }
      </nav>
    </header>
  )
}