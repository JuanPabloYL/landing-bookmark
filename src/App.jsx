import {
  BookMark,
  Download,
  Features,
  HeroSection,
  NavBar,
  Questions,
  StayUptoDate,
} from "./components";

const App = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Features />
      <BookMark />
      <Download />
      <Questions />
      <StayUptoDate />
    </>
  );
};

export { App };
