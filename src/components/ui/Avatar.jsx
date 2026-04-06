import React from 'react';
import { motion } from 'framer-motion';

export const Avatar = ({ src, size, className }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className={`rounded-full overflow-hidden shadow-md border-[2px] border-white ${size} ${className} flex-shrink-0 z-10 bg-white`}
  >
    <img src={src} alt="avatar" className="w-full h-full object-cover" />
  </motion.div>
);
