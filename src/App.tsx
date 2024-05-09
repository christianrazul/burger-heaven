import { Navbar } from "./Navbar";

const Hero = () => {
  return (
    <div>
      <h1 className="text-center font-bowlby text-8xl text-textBeige">
        NEW YORK'S FAVORITE ORGANIC HAMBURGER JOINT
      </h1>
    </div>
  );
};

function App() {
  return (
    <div className="flex w-screen flex-col gap-8 px-10 py-6 leading-relaxed">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
