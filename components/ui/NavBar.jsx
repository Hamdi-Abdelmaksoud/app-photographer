"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavbarDemo() {
  return (
    (<div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>)
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive} className="flex ">
        <Link  href="/">
        <MenuItem setActive={setActive} active={active} item="Home">
         
        </MenuItem>
        </Link>
        <Link  href="/">
        <MenuItem setActive={setActive} active={active} item="Mariages">
         
        </MenuItem>
        </Link>
        <Link  href="/">
        <MenuItem setActive={setActive} active={active} item="Corporate&Commercial">
         
        </MenuItem>
        </Link>
        <Link  href="/">
        <MenuItem setActive={setActive} active={active} item="Street Phtography">
        </MenuItem>
        </Link>
      
      </Menu>
    </div>)
  );
}
