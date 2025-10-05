import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import EventDetails from '../components/EventDetails';
import EventSpeakers from '../components/EventSpeakers';
import EventPayment from '../components/EventPayment';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function EventPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <EventDetails />
      <EventSpeakers />
      <EventPayment />
      <Footer />
    </div>
  );
}

