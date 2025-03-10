import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Contact() {
  return (
    <div className="fixed left-3.5 top-[15vh] bottom-[15vh] flex flex-col items-center z-30">
      {/* Barres de décoration */}
      <div className="w-2.5 h-[25vh] bg-amber-500"></div>

      {/* Liste des icônes */}
      <div className="h-[20vh] flex flex-col justify-center space-y-4">
        <ul className="w-full flex flex-col justify-center items-center space-y-4">
          <li>
          <Link
  href={"/"}
  className="w-8 h-8">
              <FaInstagramSquare  className="w-6 h-6 text-pink-600 " />
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              
               >
              <FaFacebook className="w-6 h-6 text-blue-600" />
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="w-8 h-8    "
            >
              <span className="w-8 h-8 bg-amber-50 flex justify-center items-center rounded-full">

              <IoIosMail className="w-6 h-6 text-black" />
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Barres de décoration */}
      <div className="w-2.5 h-[25vh] bg-amber-500"></div>
    </div>
  );
}
