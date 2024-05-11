import { Hero } from "../components/Hero";
import { MenuPreview } from "../components/MenuPreview";
import { Feedback } from "../components/Feedback";
import { CTASection } from "../components/CTASection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <MenuPreview />
      <Feedback />
      <CTASection />
    </>
  );
};

export default HomePage;
