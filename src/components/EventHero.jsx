import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function FloatingPaths({ position }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(235, 0, 40, ${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full text-red-600"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function EventHero() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden" style={{ background: '#000000' }}>
      <div className="absolute inset-0" style={{ background: '#000000' }}>
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Top Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <Link to="/" className="text-white hover:text-red-500 transition-colors duration-300">
          <span className="font-bold text-xl">Home</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/about" className="text-white hover:text-red-500 transition-colors duration-300 font-semibold">About</Link>
          <a href="#events" className="text-white hover:text-red-500 transition-colors duration-300 font-semibold">Events</a>
        </div>
      </div>

      <div className="relative z-10 hero-content min-h-screen w-full flex items-center justify-center">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 0 }}>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 1.2,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider text-white"
            style={{
              margin: 0,
              padding: 0,
              lineHeight: 1,
              letterSpacing: '0.15em',
              textAlign: 'center',
             fontFamily: "'Oswald', sans-serif"
            }}
          >
            EVERTIDE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200"
            style={{ 
              lineHeight: 1.2, 
              fontWeight: 500,
              letterSpacing: '0.02em',
              margin: 0,
              marginTop: '1.5rem',
              padding: 0,
              whiteSpace: 'nowrap',
              textAlign: 'center'
            }}
          >
            It reminds us that success flows like the tide
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="scroll-indicator"
          >
            <div className="mouse">
              <div className="mouse-icon">
                <span className="mouse-wheel"></span>
              </div>
              <div className="mouse-label">Scroll Down</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

