import { motion } from "framer-motion";

export const MenuPreview = () => {
  const menuVariants = {
    hidden: { opacity: 0, y: 50 }, // Starting state before the component comes into view
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    }, // State when the component is in view
  };

  const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="mt-12 flex w-full gap-8 font-bowlby"
      variants={menuVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div
        className="flex h-[753px] w-1/2 items-end rounded-3xl border-4 border-textBeige bg-cover bg-center p-4"
        style={{
          backgroundImage: "url('./src/assets/fries.webp')",
        }}
      >
        <motion.div
          className="text flex h-[185px] w-[386px] flex-col items-start justify-center gap-2 rounded-3xl bg-bgDarkBlue p-12"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <h2 className="text-3xl text-textBeige">
            SALT & VINEGAR FRENCH FRIES
          </h2>
          <button className="text-xl text-accentPurple">ORDER ONLINE</button>
        </motion.div>
      </div>
      <div
        className="flex h-[753px] w-1/2 items-end rounded-3xl border-4 border-textBeige bg-cover bg-center p-4"
        style={{
          backgroundImage: "url('./src/assets/chickensandwich.webp')",
        }}
      >
        <motion.div
          className="text flex h-[185px] w-[386px] flex-col items-start justify-center gap-2 rounded-3xl bg-bgDarkBlue p-12"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <h2 className="text-3xl text-textBeige">CRISPY CHICKEN SANDWICH</h2>
          <button className="text-xl text-accentPurple">ORDER ONLINE</button>
        </motion.div>
      </div>
    </motion.div>
  );
};
