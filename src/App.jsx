import {
  BookMark,
  Download,
  Features,
  Footer,
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
      <Footer />
    </>
  );
};

export { App };
