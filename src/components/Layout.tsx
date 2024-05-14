import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="3xl:px-[620px] flex w-full flex-col gap-8 overflow-hidden px-10 py-6 font-bowlby">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
