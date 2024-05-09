export const Navbar = () => {
  return (
    <nav className='flex justify-between w-full items-center'>
      <div>
        <h1 className='text-textBeige font-bowlby text-3xl'>BURGER HEAVEN</h1>
      </div>
      <ul className='flex gap-8 text-textBeige font-bowlby items-center'>
        <li>ABOUT</li>
        <li>MENU</li>
        <li>
          <button className='bg-accentPurple h-12 w-48 text-black'>ORDER ONLINE</button>
        </li>
      </ul>
    </nav>
  );
};
