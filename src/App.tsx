import { Navbar } from "./Navbar";

interface BurgerImgProps {
  size: "sm" | "md";
  className?: string;
}

const BurgerImg = ({ size, className }: BurgerImgProps) => {
  switch (size) {
    case "sm":
      return (
        <img
          src="./src/assets/burgir.webp"
          alt="burgir"
          className={`h-[356px] w-[414px] ${className}`}
        />
      );
    case "md":
      return (
        <img
          src="./src/assets/burgir.webp"
          alt="burgir"
          className={`${className}`}
        />
      );
    default:
      return <img src="./src/assets/burgir.webp" alt="burgir" />;
  }
};

const Hero = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="text-center font-bowlby text-8xl text-textBeige">
        NEW YORK'S FAVORITE ORGANIC HAMBURGER JOINT
      </h1>
      <div className="relative flex h-96 w-full items-center">
        <img src="./src/assets/left-squiggly.svg" className="absolute left-0" />
        <BurgerImg
          size={"sm"}
          className="absolute left-36 top-1/2 z-10 -translate-y-1/2 transform"
        />
        <BurgerImg
          size={"md"}
          className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform "
        />
        <BurgerImg
          size={"sm"}
          className="absolute right-36 top-1/2 z-10 -translate-y-1/2 transform"
        />
        <img
          src="./src/assets/right-squiggly.svg"
          className="absolute right-0"
        />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="flex w-screen flex-col gap-8 px-10 py-6 leading-[88.9%]">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
