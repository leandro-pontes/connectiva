import React from 'react';
    import { motion } from 'framer-motion';

    const DecorativeCircle = ({ size = 'w-16 h-16', color = 'bg-accent', position = 'top-0 left-0', opacity = 'opacity-30' }) => (
      <motion.div
        className={`absolute rounded-full ${size} ${color} ${position} ${opacity} -z-10`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: parseFloat(opacity.replace('opacity-', '')) / 100 || 0.3 }}
        transition={{ duration: 0.8, delay: Math.random() * 0.5, type: 'spring', stiffness: 100 }}
      />
    );

    export default DecorativeCircle;