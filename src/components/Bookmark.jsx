import illustrationFeatures from "../images/illustration-features-tab-1.svg";

const BookMark = () => {
  return (
    <section className="container xs:mt-[5rem] md:mt-[10rem] flex xs:flex-col-reverse xs:text-center md:flex-row-reverse md:gap-[10rem] md:text-left">
      <div className="xs:mt-[5rem] md:w-[55%]">
        <h2 className="text-darkBlue py-10 font-bold xs:text-4xl md:text-6xl">
          Bookmark in one click{" "}
        </h2>
        <p className="text-grayishBlue">
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your favorite
          sites.
        </p>
        <div>
          <button className="xs:hidden md:inline-block px-[2rem] py-[1rem] rounded  bg-primary text-white mt-[3rem]">
            Here Info
          </button>
        </div>
      </div>
      <div className="relative">
        <img
          src={illustrationFeatures}
          alt="features"
          className="md:w-[70rem] xs:w-auto"
        />
        <div className="absolute xs:top-[8rem] xs:h-[20rem] bg-primary sm:w-[100rem] sm:h-[30rem] rounded-r-full sm:top-[9rem] xs:right-[8rem] xs:left-[-70rem] z-[-1]  sm:left-[-65rem]" />
      </div>
    </section>
  );
};

export { BookMark };
