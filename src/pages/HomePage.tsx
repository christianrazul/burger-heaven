import { Hero } from "../components/Hero";
import { MenuPreview } from "../components/MenuPreview";
import { Feedback } from "../components/Feedback";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <MenuPreview />
      <Feedback />
      <CTASection />
      <Footer />
    </>
  );
};

export default HomePage;
