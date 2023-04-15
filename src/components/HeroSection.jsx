import ilustrationHero from "../images/illustration-hero.svg";

const HeroSection = () => {
  return (
    <section className="container mt-[10rem] flex xs:flex-col-reverse md:flex-row justify-between">
      <div className="xs:w-auto xs:text-center xs:mt-14 md:w-[40%] md:text-left">
        <div>
          <h1 className="sm:text-7xl xs:text-6xl font-bold ">
            A Simple Bookmark Manager
          </h1>
          <p className="mt-14 text-grayishBlue">
            A clean and simple interface organize to organize your favourite
            websites. Open a nwe browser tab and see your sites load instantly.
            Try it for free.
          </p>
        </div>
        <div className="flex gap-10 mt-10 xs:justify-center md:justify-start">
          <button className="bg-primary shadow-lg text-white py-[1rem] px-[2rem] rounded-xl">
            Get it on Chrome
          </button>
          <button className="bg-gray-100 text-darkBlue py-[1rem] px-[2rem] rounded-xl">
            Get it on Firefox
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="mr-[-9rem] ">
          <img
            src={ilustrationHero}
            alt="illustration"
            className="mt-[-7rem] xs:w-[80%] sm:w-auto"
          />
        </div>
        <div className="absolute xs:top-0 xs:h-[20rem] bg-primary sm:w-[100rem] sm:h-[30rem] rounded-l-full sm:top-[9rem] xs:left-[8rem] xs:right-[-70rem] z-[-1]  sm:right-[-65rem]" />
      </div>
    </section>
  );
};

export { HeroSection };
