import { useRef, useState } from "react";
import logoBookmark from "../images/logo-bookmark.svg";
import iconMenu from "../images/icon-hamburger.svg";
import iconClose from "../images/icon-close.svg";
import iconFacebook from "../images/icon-facebook.svg";
import iconTwitter from "../images/icon-twitter.svg";

const NavBar = () => {
  const [navLogo, setNavLogo] = useState(false);
  const mobileNav = useRef();

  const handleMenu = () => {
    setNavLogo((value) => !value);
    mobileNav.current.classList.remove("hidden");
  };

  const hideMenu = () => {
    mobileNav.current.classList.add("hidden");
  };

  return (
    <div className="relative  w-full">
      <header className="flex  justify-between items-center container py-[4rem]">
        <img src={logoBookmark} alt="logo" className="sm:w-2/12" />
        <nav>
          <img
            className="sm:hidden"
            src={iconMenu}
            alt="menu"
            onClick={handleMenu}
          />
          <div className="xs:hidden sm:inline">
            <ul className="flex gap-[2.5rem] uppercase items-center text-darkBlue text-2xl ">
              <li>
                <a
                  className="hover:text-secondary tracking-widest duration-300"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary tracking-widest duration-300"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="hover:text-secondary tracking-widest duration-300"
                  href="#"
                >
                  Contact
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="text-white tracking-widest duration-300 bg-secondary border-2 py-2 px-[2rem] hover:shadow-md hover:bg-white hover:text-secondary outline hover:outline-secondary rounded"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Mobile */}
        <div
          ref={mobileNav}
          className="fixed hidden inset-x-0 inset-y-0 flex flex-col justify-between bg-darkBlue py-[1rem] px-[2rem] h-screen z-10 text-white "
        >
          <nav>
            <div className="flex justify-between items-center py-[3rem]">
              <div>
                <img
                  src={logoBookmark}
                  alt="logo"
                  className="w-[15rem]  grayscale fill-white"
                />
              </div>
              <div className="">
                <img
                  className="z-10"
                  src={iconClose}
                  alt="menu"
                  onClick={hideMenu}
                />
              </div>
            </div>
            <div className="">
              <ul className="flex flex-col  text-white  uppercase items-center text-center  text-4xl ">
                <li className="border-b-[1px] border-t-[1px] py-[2rem] w-full">
                  <a
                    className="hover:text-secondary tracking-widest duration-300"
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li className="border-b-[1px] py-[2rem] w-full">
                  <a
                    className="hover:text-secondary tracking-widest duration-300"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li className="border-b-[1px] py-[2rem] w-full">
                  <a
                    className="hover:text-secondary tracking-widest duration-300"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
                <li className="border-[3.5px] rounded-md py-[1rem] font-bold mt-[3rem] border-white w-full">
                  <a href="#" className="">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="flex justify-center gap-[3rem]">
            <div>
              <img src={iconFacebook} alt="Facebook Icon" />
            </div>
            <div>
              <img src={iconTwitter} alt="Twitter Icon" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export { NavBar };
