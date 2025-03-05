import Link from "next/link";

export default function NavList({varClass}){
  return       <ul className={`${varClass}`}>
        
  <li>

    <Link href="/">Mariages</Link >
  </li>
  <li>

    <Link href="/">Street</Link >
  </li>
  <li>

    <Link href="/">Shootings</Link >
  </li>
  <li>

    <Link href="/">Home</Link >
  </li>
  <li>
    <Link href="/">Corporate&Commercial</Link >
  </li>
</ul>
}