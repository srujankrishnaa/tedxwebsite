import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = ['Home', 'About', 'Events', 'Partners']
  const isHomePage = location.pathname === '/'

  return (
    <nav className="navbar-main">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo-link">
            <div className="navbar-logo">
              <img 
                src="/tedxgriet-logo.png" 
                alt="TEDxGRIET" 
                className="navbar-logo-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <h1 className="navbar-logo-text" style={{ display: 'none' }}>
                <span className="logo-tedx">TEDx</span>
                <span className="logo-griet">GRIET</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-links">
              {navItems.map((item) => {
                if (item === 'Home') {
                  return (
                    <Link
                      key={item}
                      to="/"
                      className="navbar-link"
                    >
                      {item}
                    </Link>
                  );
                }
                if (item === 'About') {
                  return (
                    <Link
                      key={item}
                      to="/about"
                      className="navbar-link"
                    >
                      {item}
                    </Link>
                  );
                }
                if (item === 'Events') {
                  return (
                    <Link
                      key={item}
                      to="/event"
                      className="navbar-link"
                    >
                      {item}
                    </Link>
                  );
                }
                return (
                  <a
                    key={item}
                    href={isHomePage ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
                    className="navbar-link"
                  >
                    {item}
                  </a>
                );
              })}
              
              {/* Register Now Button */}
              <Link to="/event#register">
                <Button variant="default" size="default">
                  REGISTER NOW
                </Button>
              </Link>
            </div>

          {/* Mobile menu button */}
          <div className="navbar-mobile-toggle">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="navbar-hamburger"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-links">
            {navItems.map((item) => {
              if (item === 'Home') {
                return (
                  <Link
                    key={item}
                    to="/"
                    className="navbar-mobile-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                );
              }
              if (item === 'About') {
                return (
                  <Link
                    key={item}
                    to="/about"
                    className="navbar-mobile-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                );
              }
              if (item === 'Events') {
                return (
                  <Link
                    key={item}
                    to="/event"
                    className="navbar-mobile-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                );
              }
              return (
                <a
                  key={item}
                  href={isHomePage ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
                  className="navbar-mobile-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              );
            })}
            
            {/* Register Now Button for Mobile */}
            <Link to="/event#register" onClick={() => setIsOpen(false)}>
              <Button variant="default" size="default" className="w-full">
                REGISTER NOW
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

