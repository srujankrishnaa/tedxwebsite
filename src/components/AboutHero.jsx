import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Microphone Background - White, positioned on the right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-[0.5%] top-[25%] w-[50%] lg:w-[40%] h-auto opacity-10"
        style={{ zIndex: 1 }}
      >
        <img 
          src="/mic-illustration.png" 
          alt="" 
          className="w-full h-auto object-contain"
          style={{
            filter: 'brightness(0) invert(1)',
            transform: 'rotate(15deg)'
          }}
        />
      </motion.div>

      {/* Text Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-left max-w-6xl"
        >
          <h1 className="font-black leading-[0.95]" style={{ letterSpacing: '-0.02em' }}>
            <span className="text-[#E74536] block text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem]">
              TED is a
            </span>
            <span className="text-white block text-[5rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.2rem] xl:text-[5rem] mt-1" style={{ marginLeft: '-3rem' }}>
              nonprofit organization
            </span>
            <span className="text-white block text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.2rem] xl:text-[5rem]" style={{ marginLeft: '1rem' }}>
              devoted to ideas
            </span>
            <span className="text-white block text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.2rem] xl:text-[5rem]" style={{ marginLeft: '4.5rem' }}>
              worth spreading
            </span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
