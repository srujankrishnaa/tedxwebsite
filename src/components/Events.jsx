import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CartoonButton = ({ 
  label, 
  color = 'bg-orange-400', 
  hasHighlight = true, 
  disabled = false, 
  onClick 
}) => {
  const handleClick = () => {
    if (disabled) return;
    onClick?.();
  };

  return (
    <div className={`inline-block ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
      <button
        disabled={disabled}
        onClick={handleClick}
        className={`cartoon-button ${color} ${disabled ? 'cartoon-button-disabled' : ''}`}
      >
        <span className="cartoon-button-text">{label}</span>
        {hasHighlight && !disabled && (
          <div className="cartoon-button-shine"></div>
        )}
      </button>
    </div>
  );
};

const Events = () => {
  const handleRegisterClick = () => {
    window.location.href = '/event#register';
  };

  return (
    <section id="events" className="events-section">
      <div className="events-container">
        {/* Header */}
        <div className="events-header">
          <h2 className="events-title">Events</h2>
          <a href="#all-events" className="events-link">
            SEE ALL EVENTS →
          </a>
        </div>

        {/* Event Banner */}
        <div className="event-banner-card">
          <Link to="/event" className="event-banner-link">
            <img 
              src="/event-banner.jpeg" 
              alt="TEDxGRIET Event - Beyond Boundaries" 
              className="event-banner-img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="event-banner-placeholder" style={{ display: 'none' }}>
              <div className="placeholder-content">
                <h3>BEYOND BOUNDARIES</h3>
                <p className="event-date">MAY 8TH 2025</p>
                <h2 className="event-theme">EVERTIDE</h2>
                <p className="event-tagline">IDEAS THAT INSPIRE</p>
              </div>
            </div>
          </Link>
          
          {/* Evertide Caption */}
          <div className="event-caption">
            It reminds us that success flows like the tide — rising, falling, returning
          </div>

          {/* Register Button */}
          <div className="event-register-wrapper">
            <CartoonButton 
              label="REGISTER NOW"
              color="bg-red-500"
              onClick={handleRegisterClick}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
