import { useState } from "react";

const Features = () => {
  const [toggleSection, setToggleSection] = useState(1);

  return (
    <main className="container mt-[10rem]">
      <section className="text-grayishBlue md:w-[45%] md:mx-auto">
        <div
          className={`text-center ${toggleSection === 1 ? "inline" : "hidden"}`}
        >
          <h2 className="text-darkBlue py-10 font-bold xs:text-4xl md:text-6xl ">
            Features
          </h2>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourtie websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <div
          className={`text-center ${toggleSection === 2 ? "inline" : "hidden"}`}
        >
          <h2 className="text-darkBlue py-10 font-bold xs:text-4xl md:text-6xl">
            Intelligent Search
          </h2>
          <p>
            Our powerful search feature will helo you find saved sites in no
            time at all. No need to trawl through all of your bookmarks.
          </p>
          <div className="mt-[2rem]">
            <button className="px-[2rem] py-[1rem] rounded  bg-primary text-white">
              Here Info
            </button>
          </div>
        </div>
        <div
          className={`text-center ${toggleSection === 3 ? "inline" : "hidden"}`}
        >
          <h2 className="text-darkBlue py-10 font-bold xs:text-4xl md:text-6xl ">
            Share your bookmarks
          </h2>
          <p>
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button.
          </p>
          <div className="mt-[2rem]">
            <button className="px-[2rem] py-[1rem] rounded  bg-primary text-white">
              Here Info
            </button>
          </div>
        </div>
      </section>
      <div className="flex mt-20 xs:flex-col md:flex-row md:justify-center">
        <div className="border-b md:border-t-0 md:border-b xs:border-t text-center relative">
          <button
            className={`p-[2rem] font-semibold ${
              toggleSection === 1
                ? "text-darkBlue after:content-[''] after:bg-secondary xs:after:w-[40%] md:after:w-[60%] after:h-[.5rem] after:block after:absolute after:bottom-0 after:right-0 after:left-0 after:mx-auto "
                : "text-grayishBlue"
            }`}
            onClick={() => setToggleSection(1)}
          >
            Simple Bookmarking
          </button>
        </div>
        <div className="border-b text-center relative">
          <button
            className={`p-[2rem] font-semibold ${
              toggleSection === 2
                ? "text-darkBlue after:content-[''] after:bg-secondary xs:after:w-[40%] md:after:w-[60%] after:h-[.5rem] after:block after:absolute after:bottom-0 after:right-0 after:left-0 after:mx-auto "
                : "text-grayishBlue"
            }`}
            onClick={() => setToggleSection(2)}
          >
            Speedy Searching
          </button>
        </div>
        <div className="border-b text-center relative">
          <button
            className={`p-[2rem] font-semibold ${
              toggleSection === 3
                ? "text-darkBlue after:content-[''] after:bg-secondary xs:after:w-[40%] md:after:w-[60%] after:h-[.5rem] after:block after:absolute after:bottom-0 after:right-0 after:left-0 after:mx-auto "
                : "text-grayishBlue"
            }`}
            onClick={() => setToggleSection(3)}
          >
            Easy Sharing
          </button>
        </div>
      </div>
    </main>
  );
};

export { Features };
