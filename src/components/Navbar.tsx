import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="mb-8 flex w-full items-center justify-between">
      <div>
        <NavLink to="/">
          <h1 className="font-bowlby text-3xl text-textBeige">BURGER HEAVEN</h1>
        </NavLink>
      </div>
      <ul className="flex items-center gap-8 font-bowlby text-textBeige">
        <NavLink to="/about">
          <li>ABOUT</li>
        </NavLink>
        <NavLink to="/menu">
          <li>MENU</li>
        </NavLink>
        <li>
          <button className="h-12 w-48 bg-accentPurple text-black">
            ORDER ONLINE
          </button>
        </li>
      </ul>
    </nav>
  );
};
