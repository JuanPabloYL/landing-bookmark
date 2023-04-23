import { useRef, useState } from "react";

const StayUptoDate = () => {
  const [form, setForm] = useState({
    email: "",
  });

  const email = useRef("");
  const small = useRef("");
  const inputContainer = useRef("");
  const ionIcon = useRef("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (!validateEmail(form.email)) {
      email.current.classList.add("border-2", "border-rose-500");
      small.current.classList.add(
        "bg-secondary",
        "text-white",
        "text-left",
        "p-[1rem]",
        "absolute",
        "left-0",
        "right-0",
        "bottom-[-4rem]",
        "rounded-md"
      );
      small.current.classList.remove("hidden");
      inputContainer.current.classList.add("mb-[3rem]");
      ionIcon.current.classList.add("active");
      return;
    }
    email.current.classList.remove("border-2", "border-rose-500");
    small.current.classList.remove(
      "bg-secondary",
      "text-white",
      "text-left",
      "p-[1rem]",
      "absolute",
      "left-0",
      "right-0",
      "bottom-[-4rem]",
      "rounded-md"
    );
    small.current.classList.add("hidden");
    inputContainer.current.classList.remove("mb-[3rem]");
    ionIcon.current.classList.remove("active");
  };

  return (
    <section className="bg-primary text-center mt-[10rem] md:mt-[15rem]">
      <div className="container text-white py-[5rem]">
        <p className="tracking-[.8rem] text-xl">35.000+ ALREADY JOINED</p>

        <h2 className="text-5xl py-[2rem]">
          Stay up-to-date with what we're doing
        </h2>

        <form
          className="flex flex-col sm:flex-row text-black sm:items-center sm:justify-center sm:gap-[2rem]"
          onSubmit={handleForm}
        >
          <div ref={inputContainer} className="relative">
            <input
              type="text"
              name="email"
              placeholder="Enter your email address"
              className="py-[1.5rem] px-[1rem] rounded-md font-rubik focus:outline-none relative w-full sm:w-[50rem]"
              value={form.email}
              onChange={(e) => setForm({ email: e.target.value })}
              ref={email}
            />
            <small ref={small} className="hidden">
              Whoops, make sure it's an email
            </small>
            <div ref={ionIcon} className="ion-container">
              <ion-icon name="alert-circle-outline"></ion-icon>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="px-[2rem] py-[1.5rem] rounded-md  bg-secondary text-white w-full font-rubik mt-[2rem] md:mt-0 sm:w-[20rem]"
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export { StayUptoDate };
