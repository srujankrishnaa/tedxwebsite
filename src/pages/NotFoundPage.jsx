import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl"
        >
          {/* 404 Number */}
          <h1 className="text-9xl sm:text-[12rem] font-bold mb-4">
            <span className="text-white">4</span>
            <span className="text-tedx-red">0</span>
            <span className="text-white">4</span>
          </h1>
          
          {/* Message */}
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          
          <p className="text-gray-400 text-lg mb-8">
            Looks like you've wandered off the beaten path. The page you're looking for doesn't exist.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="px-8 py-3 bg-tedx-red text-white font-semibold rounded-full hover:bg-red-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Back to Home
            </Link>
            
            <Link
              to="/event"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-2"
            >
              View Events
            </Link>
          </div>
          
          {/* Decorative Element */}
          <div className="mt-12">
            <svg 
              className="mx-auto text-tedx-red opacity-20" 
              width="100" 
              height="100" 
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </motion.div>
      </div>
      
      <Footer />
      <Analytics />
    </div>
  );
}

