import Link from "next/link";
import { RxDropdownMenu } from "react-icons/rx";

export default function Nav() {
  return (
    <header className="bg-black relative pt-0 pr-2 pb-0 pl-2">
  <nav className="w-full max-w-screen-xl h-16 flex justify-between items-center">

      <div>

        <Link   href="/" className="text-amber-50 text-2xl">Logo</Link >
      </div>
      <ul className="flex gap-8 text-amber-50 justify-around">

        <li>

          <Link  href="/">Mariages</Link >
        </li>
        <li>

          <Link  href="/">Street</Link >
        </li>
        <li>

          <Link  href="/">Shootings</Link >
        </li>
        <li>

          <Link  href="/">Home</Link >
        </li>
        <li>
          <Link  href="/">Corporate&Commercial</Link >
        </li>
      </ul>
      <div><RxDropdownMenu />
      </div>
  </nav>
    </header>
  )
}