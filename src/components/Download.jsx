import googleLogo from "../images/logo-chrome.svg";
import firefoxLogo from "../images/logo-firefox.svg";
import operaLogo from "../images/logo-opera.svg";

const Download = () => {
  return (
    <section className="container mt-[15rem] xs:text-center">
      <div>
        <h2 className="text-darkBlue py-10 font-bold xs:text-4xl md:text-6xl">
          Download the Extension
        </h2>
        <p className="text-grayishBlue">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like to us prioritize
        </p>
      </div>
      <div className="w-[35rem] mx-auto mt-[5rem] md:flex md:w-full md:gap-[5rem]">
        <div className="mt-[10rem]flex flex-col items-center shadow-2xl rounded-xl mb-[5rem] md:flex-1 md:h-[47rem]">
          <div className="border-dotted border-b-8 border-gray-200 py-[5rem] w-full">
            <img
              src={googleLogo}
              alt="google logo"
              className="p-0 w-[30%] mx-auto"
            />
            <p className="font-bold text-darkBlue text-5xl py-[3rem]">
              Add to Chrome
            </p>
            <p className="text-grayishBlue text-3xl">Minimum version 62</p>
          </div>
          <div className="py-[3rem] w-full px-[2rem]">
            <button className="w-full py-[1.5rem] rounded-lg  bg-primary text-white shadow-md">
              Add & Install extension
            </button>
          </div>
        </div>
        {/* Google */}
        <div className="flex flex-col items-center shadow-2xl rounded-xl mb-[5rem] md:flex-1 md:h-[47rem] md:mt-[5rem]">
          <div className="border-dotted border-b-8 border-gray-200 py-[5rem] w-full">
            <img
              src={firefoxLogo}
              alt="google logo"
              className="p-0 w-[30%] mx-auto"
            />
            <p className="font-bold text-darkBlue text-5xl py-[3rem]">
              Add to Chrome
            </p>
            <p className="text-grayishBlue text-3xl">Minimum version 62</p>
          </div>
          <div className="py-[3rem] w-full px-[2rem]">
            <button className="w-full py-[1.5rem] rounded-lg  bg-primary text-white shadow-md">
              Add & Install extension
            </button>
          </div>
        </div>
        {/* Firefox */}
        <div className="mt-[10rem]flex flex-col items-center shadow-2xl rounded-xl mb-[5rem] md:flex-1 md:h-[47rem] md:mt-[10rem]">
          <div className="border-dotted border-b-8 border-gray-200 py-[5rem] w-full">
            <img
              src={operaLogo}
              alt="google logo"
              className="p-0 w-[30%] mx-auto"
            />
            <p className="font-bold text-darkBlue text-5xl py-[3rem]">
              Add to Chrome
            </p>
            <p className="text-grayishBlue text-3xl">Minimum version 62</p>
          </div>
          <div className="py-[3rem] w-full px-[2rem]">
            <button className="w-full py-[1.5rem] rounded-lg  bg-primary text-white shadow-md">
              Add & Install extension
            </button>
          </div>
        </div>
        {/* Opera */}
      </div>
    </section>
  );
};

export { Download };
