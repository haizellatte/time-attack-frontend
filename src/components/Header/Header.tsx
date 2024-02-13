import HeaderAuth from "./components/HeaderAuth";
import HeaderLogo from "./components/HeaderLogo";
import HeaderNav from "./components/HeaderNav";

function Header() {
  return (
    <header className="bg-white sticky top-0 h-16 border-b flex items-center px-5 lg:px-8 z-10 shrink-0">
      <HeaderLogo />
      <HeaderNav />
      <HeaderAuth />
    </header>
  );
}

export default Header;
