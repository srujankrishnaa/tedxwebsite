import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export default function EventPayment() {
  // Update this URL with your actual Google Form link
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdARbe6UCMYc97j4PczWmrQOuy_t0JWUzq6pHK7H8qIDFnK8A/viewform";

  const handleRegisterClick = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  return (
    <section id="register" className="relative min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#000000', position: 'relative', zIndex: 10 }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-full max-w-2xl mx-auto">
          {/* Video Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full relative z-0"
          >
            <video
              className="w-full h-auto block"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/registration-animation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Register Now Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center -mt-16 w-full relative z-10"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Join Us?
            </h2>
            <Button 
              onClick={handleRegisterClick}
              className="text-lg sm:text-xl px-8 py-4"
            >
              REGISTER NOW
            </Button>
            <p className="mt-6 text-gray-400 text-sm sm:text-base">
              Secure your spot for an unforgettable experience
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

