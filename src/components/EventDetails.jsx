import React from 'react';
import { motion } from 'framer-motion';

export default function EventDetails() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
    {/* Theme Section - Red Background */}
    <section className="relative min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #1a0a0a 0%, #4a0e0e 25%, #8b1818 50%, #4a0e0e 75%, #1a0a0a 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About EVERTIDE
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-red-500">The Theme</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">EVERTIDE</span> reminds us that success flows like the tide — rising, falling, returning. 
              Progress is never linear; it is cyclical. To thrive, we must learn not to resist the tide but to ride it, 
              adapting with grace as conditions shift around us.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video bg-gradient-to-br from-red-900/20 to-black border-2 border-red-600/30 rounded-2xl overflow-hidden backdrop-blur-sm">
              <img 
                src="/event-banner.jpeg" 
                alt="TEDxGRIET Season 07 - Evertide" 
                className="w-full h-full object-cover"
                style={{
                  filter: 'brightness(0.9) contrast(1.1)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Info Cards Section - Black Background */}
    <section className="relative text-white py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#000000', position: 'relative', zIndex: 10 }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <div className="bg-gradient-to-br from-red-900/10 to-black border border-red-600/20 rounded-xl p-8 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">Date & Time</h4>
            <p className="text-white">October 17, 2025</p>
            <p className="text-white">9:00 AM - 3:30 PM</p>
          </div>

          <div className="bg-gradient-to-br from-red-900/10 to-black border border-red-600/20 rounded-xl p-8 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">Venue</h4>
            <p className="text-white">Gokaraju Rangaraju</p>
            <p className="text-white">Institute of Engineering & Technology</p>
          </div>

          <div className="bg-gradient-to-br from-red-900/10 to-black border border-red-600/20 rounded-xl p-8 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">Capacity</h4>
            <p className="text-white">200+ Attendees</p>
            <p className="text-white">Limited Seats Available</p>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8">What to Expect</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Inspiring Talks', icon: '🎤' },
              { title: 'Networking', icon: '🤝' },
              { title: 'Live Performances', icon: '🎭' },
              { title: 'Refreshments', icon: '☕' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-lg">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}

