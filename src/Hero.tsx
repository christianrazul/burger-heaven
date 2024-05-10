import { BurgerImg } from "./BurgerImg";

export const Hero = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="w-[1158px] text-center font-bowlby text-8xl leading-[88.9%] text-textBeige">
        NEW YORK'S FAVORITE ORGANIC HAMBURGER JOINT
      </h1>
      <div className="relative flex h-[478px] w-full items-center justify-center">
        <img src="./src/assets/left-squiggly.svg" className="absolute left-0" />
        <div className="relative -top-6 h-full w-4/5">
          <BurgerImg
            size={"sm"}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform"
          />
          <BurgerImg
            size={"md"}
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform "
          />
          <BurgerImg
            size={"sm"}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform"
          />
        </div>
        <img
          src="./src/assets/right-squiggly.svg"
          className="absolute right-0"
        />
      </div>
      <div className="flex h-96 w-full rounded-xl border-4 border-bgDarkBlue bg-accentLime px-24 py-20">
        <h1 className="font-bowlby text-7xl">THE BURGER ABOVE ALL BURGERS</h1>
        <div className="flex w-full flex-col justify-between gap-8">
          <p className="font-inter text-2xl font-semibold">
            Welcome to Burger Heaven, where each burger is a masterpiece of
            flavor. Tempted by a taste of paradise?
          </p>
          <button
            className="h-16 w-44 shrink-0 border-4 border-bgDarkBlue bg-textBeige font-bowlby text-lg drop-shadow-boxy"
            // style={{ boxShadow: "0.5rem 0.5rem black" }}
          >
            ABOUT US
          </button>
        </div>
      </div>
    </div>
  );
};
