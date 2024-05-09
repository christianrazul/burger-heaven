export const Feedback = () => {
  return (
    <section className="flex flex-col gap-16 font-bowlby">
      <div className="relative h-24 w-full">
        <h1 className="absolute z-20 text-8xl text-accentLime">
          “ THE BEST BURGER “
        </h1>
      </div>
      <div
        className="flex h-[503px] items-end rounded-3xl border-4 border-textBeige bg-cover bg-center p-4"
        style={{
          backgroundImage: "url('./src/assets/people-eating.webp')",
        }}
      ></div>
    </section>
  );
};
