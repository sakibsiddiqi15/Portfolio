import Image from "next/image";
import logo from "../../public/logo-light.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.pageYOffset > 1 ? setScrolled(true) : setScrolled(false);
    });
  }, []);
  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div
        className={`container mx-auto flex justify-between duration-200 ${
          scrolled ? "py-2 bg-white/5 backdrop-saturate-50 backdrop-blur-xl" : "py-5"
        }`}
      >
        <Image alt="Logo" src={logo} className=" max-w-[90px] object-contain" />
        <div className="flex gap-2">
          <a
            href="#contact"
            className="btn py-3 h-auto min-h-min btn-info tracking-wider font-bold"
          >
            Hello
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
