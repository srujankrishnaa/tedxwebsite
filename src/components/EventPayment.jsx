import React from 'react';
import { motion } from 'framer-motion';

export default function EventPayment() {
  return (
    <section id="register" className="relative min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#000000', position: 'relative', zIndex: 10 }}>
      <div className="max-w-7xl mx-auto flex items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Registration Details Coming Soon
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
}

