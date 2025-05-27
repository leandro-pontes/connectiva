import React from 'react';
    import { motion } from 'framer-motion';

    const Section = ({ children, className = '', id }) => (
      <motion.section
        id={id}
        className={`py-16 md:py-24 px-4 md:px-8 relative overflow-hidden ${className}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.section>
    );

    export default Section;