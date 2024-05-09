import { Hero } from "./Hero";
import { Navbar } from "./Navbar";

function App() {
  return (
    <div className="flex w-screen flex-col gap-8 px-10 py-6 2xl:px-[620px]">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
