import { useRef, useState } from "react";

const StayUptoDate = () => {
  const [form, setForm] = useState({
    email: "",
  });

  const email = useRef("");
  const small = useRef("");
  const inputContainer = useRef("");

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
        "p-[1rem]",
        "absolute",
        "left-0",
        "right-0",
        "bottom-[-4rem]",
        "rounded-md",
        "inline-block"
      );
      inputContainer.current.classList.add("mb-[3rem]");
    }
  };

  return (
    <section className="bg-primary text-center mt-[10rem] md:mt-[15rem]">
      <div className="container text-white py-[5rem]">
        <p className="tracking-[.8rem] text-xl">35.000+ ALREADY JOINED</p>

        <h2 className="text-5xl py-[2rem]">
          Stay up-to-date with what we're doing
        </h2>

        <form
          className="flex flex-col md:flex-row text-black"
          onSubmit={handleForm}
        >
          <div ref={inputContainer} className="relative">
            <input
              type="text"
              name="email"
              placeholder="Enter your email adress"
              className="py-[1.5rem] px-[1rem] rounded-md font-rubik focus:outline-none relative w-full"
              value={form.email}
              onChange={(e) => setForm({ email: e.target.value })}
              ref={email}
            />
            <small ref={small} className="hidden">
              Whoops, make sure it's an email
            </small>
            <ion-icon name="alert-circle-outline"></ion-icon>
          </div>

          <div>
            <button
              type="submit"
              className="px-[2rem] py-[1.5rem] rounded-md  bg-secondary text-white w-full font-rubik mt-[2rem]"
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
