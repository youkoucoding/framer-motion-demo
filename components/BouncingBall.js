import React from 'react';
import { motion } from 'framer-motion';

const bounceTransition = {
  y: {
    duration: 1.2,
    ease: "easeOut",
    yoyo: Infinity,
  },

};

const BouncingBall = () => {
  return (
    <div className='flex justify-center items-center'>
      <motion.span
        className='block w-12 h-12 bg-yellow-600 rounded-full shadow-md'
        transition={bounceTransition}
        animate={{
          y: ["100%", "-100%"],
        }}
      />
    </div>
  );
};

export default BouncingBall;
