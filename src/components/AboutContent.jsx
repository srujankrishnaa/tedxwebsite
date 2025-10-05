import React from 'react';
import { motion } from 'framer-motion';

export default function AboutContent() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #1a0a0a 0%, #4a0e0e 25%, #8b1818 50%, #4a0e0e 75%, #1a0a0a 100%)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* About TED Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-8">About TED</h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
              </p>
              
              <p>
                The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media initiatives include TED.com, where new TED Talks are posted daily; TED Translators, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established The Audacious Project that takes a collaborative approach to funding ideas with the potential to create change at thrilling scale; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-8 text-lg">
              <p>
                Follow TED on{' '}
                <a 
                  href="https://twitter.com/tedtalks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-red-300 transition-colors duration-300"
                >
                  Twitter
                </a>
                {' '}or on{' '}
                <a 
                  href="https://www.facebook.com/TED" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-red-300 transition-colors duration-300"
                >
                  Facebook
                </a>
              </p>
            </div>
          </motion.div>

          {/* About TEDx Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-8">About TEDx</h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
              </p>
            </div>

            {/* TEDx Program Link */}
            <motion.a
              href="https://www.ted.com/about/programs-initiatives/tedx-program"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-xl font-bold text-[#E74536] hover:text-white transition-colors duration-300 group"
              whileHover={{ x: 10 }}
            >
              TEDx PROGRAM
              <svg 
                className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

