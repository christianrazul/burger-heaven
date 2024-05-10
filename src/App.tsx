import { CTASection } from "./CTASection";
import { Feedback } from "./Feedback";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { MenuPreview } from "./MenuPreview";
import { Navbar } from "./Navbar";

function App() {
  return (
    <div className="flex w-full flex-col gap-8 overflow-hidden px-10 py-6 font-bowlby 2xl:px-[620px]">
      <Navbar />
      <Hero />
      <MenuPreview />
      <Feedback />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
