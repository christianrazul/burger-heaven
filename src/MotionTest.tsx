import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const MotionTest = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className='flex flex-col gap-4'>
      <motion.button
        className='bg-purple-700 text-white text-2xl rounded-md border-0 py-2 px-4 cursor-pointer'
        onClick={() => setIsVisible(!isVisible)}
        layout
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode='popLayout'>
        {isVisible && (
          <motion.div
            initial={{
              rotate: '0deg',
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: '180deg',
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            exit={{
              rotate: '0deg',
              scale: 0,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: 'backInOut',
              times: [0, 0.25, 0.5, 0.95, 1],
            }}
            className='w-[150px] h-[150px] bg-black'
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MotionTest;
