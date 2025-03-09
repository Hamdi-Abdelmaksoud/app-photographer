import Link from "next/link";

export default function NavList({ ulStyle, liStyle, textColor }) {
  return (
    <ul className={ulStyle}>
      <li className={liStyle}>
        <Link href="/" style={{ color: textColor }}>Mariages</Link>
      </li>
      <li className={liStyle}>
        <Link href="/" style={{ color: textColor }}>Street</Link>
      </li>
      <li className={liStyle}>
        <Link href="/" style={{ color: textColor }}>Shootings</Link>
      </li>
      <li className={liStyle}>
        <Link href="/" style={{ color: textColor }}>Home</Link>
      </li>
      <li className={liStyle}>
        <Link href="/" style={{ color: textColor }}>Corporate & Commercial</Link>
      </li>
    </ul>
  );
}
