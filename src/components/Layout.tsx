import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="flex w-full flex-col gap-8 overflow-hidden px-10 py-6 font-bowlby 2xl:px-[620px]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
