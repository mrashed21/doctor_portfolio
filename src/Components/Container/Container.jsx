import React from 'react';
import { motion } from 'framer-motion';


const Container = ({ children, className = "" }) => {
 
  return (
    <motion.section className={`max-w-[1600px] w-[95%] mx-auto ${className}`}>
      {children}
    </motion.section>
  );
};

export default Container;
