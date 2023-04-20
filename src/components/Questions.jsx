import { useState } from "react";
import iconArrow from "../images/icon-arrow.svg";

const questions = [
  {
    id: 1,
    question: "What is a Bookmark?",
    answer:
      "A bookmark is a saved reference or shortcut to a specific location or resource, typically within the web browser or other software applications. Bookmarks are used to quickly access websites, documents, or other online resources that you may want to revisit in the future without having to remember or retype the URL or search ther resouce again.",
  },
  {
    id: 2,
    question: "How can I request a new browser?",
    answer:
      'To request browser support for a new extension in Google Chrome, you can submit a feature request to the Chromium Project issue tracker. Sign in with your Google account and click on the "New Issue" button.',
  },
  { id: 3, question: "Is there a mobile app?", answer: "No, there is not" },
  {
    id: 4,
    question: "What about other Chronium browsers?",
    answer:
      "Extensions are typically designed to be compatible with Chromium-based browsers, including Google Chrome, Microsoft Edge (Chromium version), Opera, and many other Chromium-based browsers. ",
  },
];

const Questions = () => {
  const [showQuestion, setShowQuestion] = useState(null);

  const toggleQuestion = (i) => {
    if (showQuestion === i) {
      return setShowQuestion(null);
    }

    setShowQuestion(i);
  };

  return (
    <section className="container md:w-[50%] md:mt-[15rem]">
      <div className="text-center">
        <h2 className="text-darkBlue py-10 font-bold xs:text-4xl md:text-6xl">
          Frequently Asked Question
        </h2>
        <p className="text-grayishBlue">
          Here are some of our FAQs. If you have any other questions you'd like
          answered pease feel free to email us.
        </p>
      </div>
      <div className="mt-[5rem]">
        {questions.map((question, index) => {
          return (
            <div key={question.id}>
              <div
                className="flex items-center py-[2rem] justify-between border-b cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <p className="text-darkBlue font-semibold hover:text-secondary transition">
                  {question.question}
                </p>
                <span>
                  <img
                    className={`${
                      showQuestion == index ? "rotate-180" : "rotate-none"
                    } transition duration-300`}
                    src={iconArrow}
                    alt="icon arrow"
                  />
                </span>
              </div>
              <p
                className={`${
                  showQuestion === index
                    ? "py-[2rem]"
                    : "max-h-0 overflow-hidden"
                }`}
              >
                {question.answer}
              </p>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-[2rem] md:mt-[5rem]">
        <button className="px-[2rem] py-[1rem] rounded  bg-primary text-white">
          Here Info
        </button>
      </div>
    </section>
  );
};

export { Questions };
