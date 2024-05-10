import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const feedbacks = [
  { text: "THE BEST BURGER I'VE EVER HAD. -AANG" },
  { text: "FLAVOR TOWN! -SOKKA" },
];
export const Feedback = () => {
  const duplicatedFeedbacks = [...feedbacks, ...feedbacks];
  const [windowWidth, setWindowWidth] = useState(0);

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

  useEffect(() => {
    // Set the window width after the component mounts
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <section className="flex flex-col gap-8 font-bowlby">
      <motion.div
        className="flex"
        animate={{
          x: [windowWidth, -windowWidth * 2],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0,
              duration: 10,
              ease: "linear",
            },
          },
        }}
      >
        {duplicatedFeedbacks.map((text, index) => (
          <div className="flex" key={index}>
            <motion.h1 className="whitespace-nowrap text-8xl text-accentLime">
              “ {text.text} “{" "}
            </motion.h1>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex h-[503px] items-end rounded-3xl border-4 border-textBeige bg-cover bg-center p-4"
        style={{
          backgroundImage: "url('./src/assets/people-eating.webp')",
        }}
        variants={menuVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      ></motion.div>
    </section>
  );
};
