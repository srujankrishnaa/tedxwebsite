import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Event date: October 17, 2025
    const eventDate = new Date('2025-10-17T00:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => {
    return String(num).padStart(2, '0');
  };

  return (
    <section className="countdown-section">
      <div className="countdown-container">
        <h2 className="countdown-title">Event Starts in</h2>
        
        <div className="countdown-timer">
          <div className="countdown-box">
            <div className="countdown-number">{formatNumber(timeLeft.days)}</div>
            <div className="countdown-label">DAYS</div>
          </div>
          
          <div className="countdown-box">
            <div className="countdown-number">{formatNumber(timeLeft.hours)}</div>
            <div className="countdown-label">HOURS</div>
          </div>
          
          <div className="countdown-box">
            <div className="countdown-number">{formatNumber(timeLeft.minutes)}</div>
            <div className="countdown-label">MINUTES</div>
          </div>
          
          <div className="countdown-box">
            <div className="countdown-number">{formatNumber(timeLeft.seconds)}</div>
            <div className="countdown-label">SECONDS</div>
          </div>
        </div>

        <div className="countdown-date">
          <svg 
            className="calendar-icon" 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="4" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M2 8H18" stroke="currentColor" strokeWidth="2"/>
            <path d="M6 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M14 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          17th October 2025
        </div>

        <a href="#register" className="countdown-button">
          Book Your Ticket Now
          <svg 
            className="arrow-icon" 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M4 10H16M16 10L11 5M16 10L11 15" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

