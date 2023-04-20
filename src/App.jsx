import {
  BookMark,
  Download,
  Features,
  HeroSection,
  NavBar,
  Questions,
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
    </>
  );
};

export { App };
