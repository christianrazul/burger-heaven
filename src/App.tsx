import { CTASection } from "./components/CTASection";
import { Feedback } from "./components/Feedback";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MenuPreview } from "./components/MenuPreview";
import { Navbar } from "./components/Navbar";

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
