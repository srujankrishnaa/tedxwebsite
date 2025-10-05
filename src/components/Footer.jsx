import React, { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your email submission logic here
    console.log('Email submitted:', email)
    alert('Thank you for subscribing!')
    setEmail('')
  }

  return (
    <footer className="footer-section">
      {/* Animated Mountain Background */}
      <div className="mountain-background">
        <svg className="mountain-layer mountain-layer-1" viewBox="0 0 1600 400" preserveAspectRatio="none">
          <path d="M0,400 L200,250 L400,320 L600,180 L800,280 L1000,200 L1200,300 L1400,240 L1600,350 L1600,400 Z" />
        </svg>
        <svg className="mountain-layer mountain-layer-2" viewBox="0 0 1600 400" preserveAspectRatio="none">
          <path d="M0,400 L300,280 L500,340 L700,220 L900,320 L1100,260 L1300,340 L1500,280 L1600,380 L1600,400 Z" />
        </svg>
        <svg className="mountain-layer mountain-layer-3" viewBox="0 0 1600 400" preserveAspectRatio="none">
          <path d="M0,400 L250,320 L450,360 L650,260 L850,340 L1050,280 L1250,360 L1450,300 L1600,400 Z" />
        </svg>
      </div>

      {/* Sponsor Section */}
      <div className="footer-sponsor">
        <div className="footer-sponsor-container">
          <div className="sponsor-card">
            <div className="sponsor-line"></div>
            <h3 className="sponsor-title">
              Interested in being a sponsor?
            </h3>
            <a href="#partner" className="sponsor-link">
              PARTNER WITH US →
            </a>
          </div>
          
          {/* Google Map */}
          <div className="sponsor-map">
            <a 
              href="https://maps.app.goo.gl/NJqZ4KJC49YMxNVg6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-overlay"
              aria-label="Open GRIET location in Google Maps"
            >
              <span className="map-overlay-text">Click to open in Google Maps</span>
            </a>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15224.958645139372!2d78.5311393!3d17.4481504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9ba3df8f5c49%3A0x7326e0eb8e3fb82d!2sGokaraju%20Rangaraju%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1735905123000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TEDxGRIET - Gokaraju Rangaraju Institute of Engineering and Technology"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Email Subscription Section */}
      <div className="footer-subscribe">
        <div className="footer-subscribe-container">
          <div className="subscribe-content">
            <h2 className="subscribe-title">
              Drop your email and we'll keep you posted on all things TEDxGRIET
            </h2>
          </div>
          <form className="subscribe-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="email-input"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          {/* Left - Logo and Description */}
          <div className="footer-left">
            <div className="footer-logo">
              <span className="footer-logo-tedx">TEDx</span>
              <span className="footer-logo-location">GRIET</span>
            </div>
            <p className="footer-description">
              This independent TEDx event is operated under license from TED
            </p>
            
            {/* Social Media Icons */}
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/tedxgriet/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/tedx.griet/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@TEDx" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right - Navigation Links */}
          <div className="footer-right">
            <div className="footer-nav">
              <a href="/about" className="footer-nav-link">About</a>
              <a href="/event" className="footer-nav-link">Events</a>
            </div>
            <div className="footer-nav">
              <a href="/#talks" className="footer-nav-link">Talks</a>
              <a href="/#partners" className="footer-nav-link">Partners</a>
            </div>
          </div>

          {/* Credits */}
          <div className="footer-credits">
            Designed & Developed by Srujan Krishna
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
