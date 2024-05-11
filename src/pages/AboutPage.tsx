import { motion } from "framer-motion";

const OurStory = () => {
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
    <section className="flex justify-center gap-16">
      <div className="flex flex-col justify-center gap-4">
        <motion.h2
          className="font-inter text-xl font-semibold text-accentLime"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          How it started
        </motion.h2>
        <motion.h1
          className="mb-8 text-6xl font-light tracking-wide text-textBeige"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          OUR STORY
        </motion.h1>
        <motion.p
          className="font-inter text-lg leading-normal text-textBeige"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          At Burger Heaven, our journey began with a simple dream: to serve not
          just food, but joy on a bun. Founded in 2022 in the heart of the city,
          we set out to create a burger experience that transcends the ordinary.
          Each of our burgers is more than just a meal; it's a crafted delight
          made with the highest quality, locally-sourced ingredients.
        </motion.p>
      </div>
      <motion.div
        className="relative"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="./assets/left-squiggly.svg"
          className="absolute -bottom-10 -right-20 -z-20 -rotate-3"
        />
        <img
          src="./assets/right-squiggly.svg"
          className="absolute -inset-20 -z-20 -rotate-3"
        />
        <img src="./assets/people-eating-burgers.webp" className="rounded-xl" />
      </motion.div>
    </section>
  );
};

const AdditionalInfo = () => {
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
  return (
    <section className="flex w-full flex-col gap-12">
      <div className="flex w-full gap-12 rounded-xl bg-accentLime px-20 py-16">
        <div className="flex w-1/2 flex-col justify-center">
          <motion.h2
            className="mb-6 text-6xl tracking-wide"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            WHY WE'RE DIFFERENT
          </motion.h2>
          <motion.p
            className="font-inter text-lg font-medium"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            We believe in flavor without compromise. Our menu features a variety
            of unique burgers, each with its own heavenly twist. From the
            classic Cheese Angel to the fiery Devil’s Delight, our burgers cater
            to all taste buds. At Burger Heaven, we’re not just cooking; we’re
            curating an experience that celebrates the art of burger making.
          </motion.p>
        </div>
        <motion.div
          className="h-[350px] w-[500px]"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src="./assets/burger-and-fries.webp"
            className="h-full w-full rounded-xl border-2 border-black object-cover object-center shadow-xl"
          />
        </motion.div>
      </div>
      <div className="flex w-full gap-12 rounded-xl bg-accentPurple px-20 py-16">
        <motion.div
          className="h-[350px] w-[500px]"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src="./assets/cooking-burgers.webp"
            className="h-full w-full rounded-xl border-2 border-black object-cover object-center shadow-xl"
          />
        </motion.div>
        <div className="flex w-1/2 flex-col justify-center">
          <motion.h2
            className="mb-6 text-6xl"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            WE COMMIT TO QUALITY
          </motion.h2>
          <motion.p
            className="font-inter text-lg font-medium"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Quality is the cornerstone of our heavenly creed. We meticulously
            select each ingredient, ensuring it meets our high standards for
            freshness and taste. Our beef is always 100% organic, sourced from
            local farms practicing sustainable agriculture, ensuring every bite
            supports our community and environment.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
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
  return (
    <motion.section
      className="relative flex h-[503px] w-full flex-col items-center justify-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <img
        src="./assets/right-squiggly.svg"
        className="absolute -left-[520px] -top-28"
      />
      <div className="flex flex-col items-center gap-4">
        <motion.h1
          className="w-[895px] text-center text-7xl text-textBeige"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          JOIN US IN PARADISE
        </motion.h1>
        <div className="mb-8 flex justify-center">
          <motion.p
            className="w-2/3 text-center font-inter text-lg font-medium text-textBeige"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            At Burger Heaven, every customer is treated like an angel. Whether
            you're dining in or ordering out, our team is dedicated to providing
            service that's as exceptional as our burgers. Come visit us and
            discover why Burger Heaven is not just a place to eat, but a place
            to gather, celebrate, and enjoy the best burgers you'll ever taste!
          </motion.p>
        </div>
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
        src="./assets/left-squiggly.svg"
        className="absolute -bottom-16 -right-[520px] z-10"
      />
    </motion.section>
  );
};

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-16 py-8">
      <OurStory />
      <AdditionalInfo />
      <CTA />
    </div>
  );
};

export default AboutPage;
