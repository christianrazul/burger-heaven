export const CTASection = () => {
  return (
    <section className="relative flex h-[503px] w-full flex-col items-center justify-center">
      <img
        src="./src/assets/right-squiggly.svg"
        className="absolute -left-[520px] -top-28"
      />
      <div className="flex flex-col items-center gap-8">
        <h1 className="w-[895px] text-center text-7xl text-textBeige">
          ORDER ONLINE OR COME VISIT US TODAY
        </h1>
        <div className="flex gap-4 ">
          <button className="h-14 w-48 bg-accentLime text-black">
            ORDER ONLINE
          </button>
          <button className="h-14 w-48 border bg-transparent text-textBeige">
            VIEW LOCATION
          </button>
        </div>
      </div>
      <img
        src="./src/assets/left-squiggly.svg"
        className="absolute -bottom-16 -right-[520px] z-10"
      />
    </section>
  );
};
