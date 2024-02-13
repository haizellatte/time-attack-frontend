import Link from "next/link";

function HeaderNav() {
  return (
    <nav className="ml-20">
      <ul className="text-[15px] font-medium">
        <li>
          <Link href="brands">BRANDS</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
