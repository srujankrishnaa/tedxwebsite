import React from 'react';
import { motion } from 'framer-motion';

export default function EventSpeakers() {
  const speakers = [
    {
      name: 'Speaker 1',
      title: 'Innovation Leader',
      bio: 'Pioneering the future of technology and human potential',
      image: '/speakers/speaker1.jpg'
    },
    {
      name: 'Speaker 2',
      title: 'Creative Visionary',
      bio: 'Transforming ideas into impactful realities',
      image: '/speakers/speaker2.jpg'
    },
    {
      name: 'Speaker 3',
      title: 'Social Entrepreneur',
      bio: 'Building sustainable solutions for global challenges',
      image: '/speakers/speaker3.jpg'
    },
    {
      name: 'Speaker 4',
      title: 'Tech Pioneer',
      bio: 'Shaping the digital landscape of tomorrow',
      image: '/speakers/speaker4.jpg'
    },
    {
      name: 'Speaker 5',
      title: 'Healthcare Innovator',
      bio: 'Revolutionizing medical care and wellness',
      image: '/speakers/speaker5.jpg'
    },
    {
      name: 'Speaker 6',
      title: 'Environmental Champion',
      bio: 'Leading the charge for a sustainable planet',
      image: '/speakers/speaker6.jpg'
    }
  ];

  return (
    <section className="relative min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #1a0a0a 0%, #4a0e0e 25%, #8b1818 50%, #4a0e0e 75%, #1a0a0a 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our Speakers
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the visionaries, innovators, and thought leaders who will share their ideas worth spreading
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-gradient-to-br from-red-900/10 to-black border border-red-600/20 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-red-900/30 to-black/50 flex items-center justify-center relative overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <span className="text-5xl font-bold text-white">{speaker.name.split(' ')[1]}</span>
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">Coming Soon</div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-red-500 transition-colors duration-300">
                  {speaker.name}
                </h3>
                <p className="text-red-400 font-semibold mb-3">{speaker.title}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{speaker.bio}</p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-red-900/20 to-black border border-red-600/30 rounded-2xl px-8 py-6 backdrop-blur-sm">
            <p className="text-lg text-gray-300 mb-2">
              <span className="text-red-500 font-bold text-2xl">6+</span> Inspiring Speakers
            </p>
            <p className="text-sm text-gray-500">More speakers to be announced soon!</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

