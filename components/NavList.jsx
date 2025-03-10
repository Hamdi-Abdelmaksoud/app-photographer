import Link from "next/link";

export default function NavList({ ulStyle, liStyle, textColor }) {
  return (
    <ul className={ulStyle}>
      <li className={liStyle}>
        <Link href="/" className={`text-${textColor} hover:text-gray-500`}>Home</Link>
      </li>
      <li className={liStyle}>
        <Link href="/" className={`text-${textColor} hover:text-gray-500`}>Wedding</Link>
      </li>
      <li className={liStyle}>
        <Link href="/" className={`text-${textColor} hover:text-gray-500`}>Shootings</Link>
      </li>
      <li className={liStyle}>
        <Link href="/" className={`text-${textColor} hover:text-gray-500`}>Street</Link>
      </li>
      <li className={liStyle}>
        <Link href="/" className={`text-${textColor} hover:text-gray-500`}>Corporate & Commercial</Link>
      </li>
    </ul>
  );
}
