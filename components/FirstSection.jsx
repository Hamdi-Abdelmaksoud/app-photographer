// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { RxDropdownMenu } from "react-icons/rx";
// import { ImMenu4 } from "react-icons/im";

// import NavList from "./NavList";

// export default function Nav() {
//   const [menu, setMenu] = useState(false);
//   function toggleMenu() {
//     return setMenu(!menu);
//   }
//   return (
//     <header className="bg-black relative pt-0 pr-2 pb-0 pl-2">
//       <nav className="w-full max-w-screen h-16 flex justify-between items-center">
//         <div>
//           <Link href="/" className="text-amber-50 text-2xl">
//             Logo
//           </Link>
//         </div>
//         <NavList varClass={"hidden sm:flex gap-8 text-amber-50 justify-around"} />
//         {menu ? (
//           <>
//             <NavList
//               varClass={
//                 "lg:hidden min-w-[80%] bg-blue-500 absolute ml-7 mr-7 top-16 flex flex-col items-center justify-center"
              
//               }
//             />
            
//             <div className="sm:hidden">
//               <ImMenu4 className="text-amber-300" onClick={toggleMenu} />
//             </div>
//           </>
//         ) : (
//           <div className="block sm:hidden">
//             <RxDropdownMenu className="text-amber-300  " onClick={toggleMenu} />
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

export default function FirstSection() {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover img-cover">
    <div  className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]"/>
      <div className="p-5 text-white z-[2] ml-[10rem] mt[-10rem]">
        <h2 className="text-5xl font-bold">Studio Mouche</h2>
        <p className="py-5 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Expedita deleniti in aut fugiat sed tempora animi doloremque corrupti et,
            explicabo quam? Placeat distinctio odio totam illum dolorem quia,
             corrupti praesentium.</p>
      </div>
    </div>
  )
}

