export const Footer = () => {
  return (
    <footer className="flex h-80 w-full flex-col justify-between rounded-2xl bg-accentPurple px-16 pb-8 pt-12">
      <div className="flex w-full justify-between">
        <h1 className="w-40 text-5xl">BURGER HEAVEN</h1>
        <ul className="flex flex-col gap-2">
          <li className="text-xl">MORE</li>
          <li className="font-inter font-semibold">About</li>
          <li className="font-inter font-semibold">Menu</li>
          <li className="font-inter font-semibold">Locations</li>
          <li className="font-inter font-semibold">Privacy</li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="text-xl">HOURS</li>
          <li className="font-inter font-semibold">Open from</li>
          <li className="font-inter font-semibold">11AM to</li>
          <li className="font-inter font-semibold">11PM daily</li>
        </ul>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl">JOIN OUR NEWSLETTER</h1>
          <div className="flex h-14 w-full rounded-md border border-black bg-transparent">
            <input
              type="text"
              className="h-full w-full appearance-none bg-transparent px-2 font-inter"
            />
            <button type="button" className="mr-4">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="font-inter font-semibold">Copyright Burger Heaven</p>
        <p className="font-inter font-semibold">Privacy Policy</p>
      </div>
    </footer>
  );
};
