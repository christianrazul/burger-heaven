import { motion } from "framer-motion";
import { BurgerImg } from "./BurgerImg";
import { NavLink } from "react-router-dom";

export const Hero = () => {
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

  const containerVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring", // Using a spring type transition
        stiffness: 260, // Spring stiffness
        damping: 20, // Damping for the spring
        mass: 1, // Mass of the element being animated
      },
    },
  };

  const buttonVariants = {
    rest: {
      opacity: 0,
      scale: 0,
      boxShadow: "0.5rem 0.5rem 0rem rgba(0, 0, 0, 1)", // Initial shadow as per your Tailwind setup
      backgroundColor: "#E9E3DC", // Assuming textBeige is something like #f5f5dc
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
      boxShadow: "0rem 0rem 0rem rgba(0, 0, 0, 0)", // Shadow retracts
      backgroundColor: "#B3A0CD", // Change to accentPurple
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex w-full flex-col items-center">
      <motion.h1
        className="font-bowlby text-8xl leading-[88.9%] text-textBeige"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        NEW YORK'S
      </motion.h1>
      <motion.h1
        className="font-bowlby text-8xl leading-[88.9%] text-textBeige"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        FAVORITE ORGANIC
      </motion.h1>
      <motion.h1
        className="font-bowlby text-8xl leading-[88.9%] text-textBeige"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        HAMBURGER JOINT
      </motion.h1>
      <motion.div
        className="relative flex h-[478px] w-full items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <img src="./assets/left-squiggly.svg" className="absolute left-0" />
        <div className="relative -top-6 h-full w-4/5">
          <BurgerImg
            size={"sm"}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform"
          />
          <BurgerImg
            size={"md"}
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform "
          />
          <BurgerImg
            size={"sm"}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform"
          />
        </div>
        <img src="./assets/right-squiggly.svg" className="absolute right-0" />
      </motion.div>
      <div className="flex h-96 w-full rounded-xl border-4 border-bgDarkBlue bg-accentLime px-24 py-20">
        <motion.h1
          className="font-bowlby text-7xl"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          THE BURGER ABOVE ALL BURGERS
        </motion.h1>
        <div className="flex w-full flex-col justify-between gap-6">
          <motion.p
            className="font-inter text-2xl font-semibold"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Welcome to Burger Heaven, where each burger is a masterpiece of
            flavor. Tempted by a taste of paradise?
          </motion.p>
          <motion.button
            className="h-16 w-44 shrink-0 border-4 border-bgDarkBlue bg-textBeige font-bowlby text-lg"
            variants={buttonVariants}
            initial="rest"
            animate="visible"
            whileHover="hover"
          >
            <NavLink to="/about">ABOUT US</NavLink>
          </motion.button>
        </div>
      </div>
    </div>
  );
};
