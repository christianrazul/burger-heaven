import { motion } from "framer-motion";

export const CTASection = () => {
  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    }),
  };

  const buttonVariants = {
    rest: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1,
      backgroundColor: "#B3A0CD", // Change to accentPurple
      color: "black",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const sectionVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      scale: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <motion.section
      className="relative flex h-[503px] w-full flex-col items-center justify-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <img
        src="./src/assets/right-squiggly.svg"
        className="absolute -left-[520px] -top-28"
      />
      <div className="flex flex-col items-center gap-8">
        <motion.h1
          className="w-[895px] text-center text-7xl text-textBeige"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          ORDER ONLINE OR COME VISIT US TODAY
        </motion.h1>
        <div className="flex gap-4 ">
          <motion.button
            className="h-14 w-48 bg-accentLime text-black"
            variants={buttonVariants}
            initial="rest"
            animate="visible"
            whileHover="hover"
          >
            ORDER ONLINE
          </motion.button>
          <motion.button
            className="h-14 w-48 border bg-transparent text-textBeige"
            variants={buttonVariants}
            initial="rest"
            animate="visible"
            whileHover="hover"
          >
            VIEW LOCATION
          </motion.button>
        </div>
      </div>
      <img
        src="./src/assets/left-squiggly.svg"
        className="absolute -bottom-16 -right-[520px] z-10"
      />
    </motion.section>
  );
};
