import logoBookmark from "../images/logo-bookmark.svg";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="bg-darkBlue">
      <footer className="container flex flex-col text-center items-center md:flex-row md:justify-between">
        <div className="md:flex md:items-center md:gap-[3rem]">
          <div className="pt-[4rem] md:p-0">
            <img src={logoBookmark} alt="logo" className="w-[20rem]" />
          </div>
          <ul className="text-white text-4xl md:flex md:gap-[2rem] md:text-3xl">
            <li className="my-[3rem]">
              <a
                href="#"
                className="tracking-widest uppercase hover:text-secondary transition duration-350"
              >
                Features
              </a>
            </li>
            <li className="my-[3rem]">
              <a
                href="#"
                className="tracking-widest uppercase hover:text-secondary transition duration-350"
              >
                Pricing
              </a>
            </li>
            <li className="my-[3rem]">
              <a
                href="#"
                className="tracking-widest uppercase hover:text-secondary transition duration-350"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex gap-[4rem] pt-[2rem] pb-[4rem] md:p-0">
          <img src={facebookIcon} alt="facebook" className="cursor-pointer" />
          <img src={twitterIcon} alt="twitter" className="cursor-pointer" />
        </div>
      </footer>
    </div>
  );
};

export { Footer };
