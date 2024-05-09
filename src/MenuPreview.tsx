export const MenuPreview = () => {
  return (
    <div className="flex w-full gap-8 font-bowlby">
      <div
        className="flex h-[753px] w-1/2 items-end rounded-3xl border-4 border-textBeige bg-cover bg-center p-4"
        style={{
          backgroundImage: "url('./src/assets/fries.webp')",
        }}
      >
        <div className="text flex h-[185px] w-[386px] flex-col items-start justify-center gap-2 rounded-3xl bg-bgDarkBlue p-12">
          <h2 className="text-3xl text-textBeige">
            SALT & VINEGAR FRENCH FRIES
          </h2>
          <button className="text-xl text-accentPurple">ORDER ONLINE</button>
        </div>
      </div>
      <div
        className="flex h-[753px] w-1/2 items-end rounded-3xl border-4 border-textBeige bg-cover bg-center p-4"
        style={{
          backgroundImage: "url('./src/assets/chickensandwich.webp')",
        }}
      >
        <div className="text flex h-[185px] w-[386px] flex-col items-start justify-center gap-2 rounded-3xl bg-bgDarkBlue p-12">
          <h2 className="text-3xl text-textBeige">CRISPY CHICKEN SANDWICH</h2>
          <button className="text-xl text-accentPurple">ORDER ONLINE</button>
        </div>
      </div>
    </div>
  );
};
