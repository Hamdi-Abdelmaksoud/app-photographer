import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
export default function NavBar() {
  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      {/* ease-in et duration pour le changement du couleur en scrolling */}
      <nav className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <div>
          <h1 className="font-bold text-4xl">LOGO</h1>
        </div>
        <ul className="hidden sm:flex ">
          <li className="p-4" >
            <Link href="/">Mariages</Link>
          </li>
          <li className="p-4">
            <Link href="/">Street</Link>
          </li>
          <li className="p-4">
            <Link href="/">Shootings</Link>
          </li>
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/">Corporate & Commercial</Link>
          </li>
        </ul>
        {/* Mobile buttons */}
        <div className="sm:hidden block z-10" >
          <AiOutlineMenu size={20} />
        </div>
        {/* mobile menu */}
        <div className="sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300">
          <ul>
            <li className="p-4 text-4xl">
              <Link href="/">Mariages</Link>
            </li>
            <li className="p-4 text-4xl">
              <Link href="/">Street</Link>
            </li>
            <li className="p-4 text-4xl">
              <Link href="/">Shootings</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl">
              <Link href="/">Corporate & Commercial</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
