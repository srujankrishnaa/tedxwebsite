import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WhatIsTedx = () => {
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const leftContent = leftRef.current
    const rightContent = rightRef.current

    // Set initial states
    gsap.set(leftContent, {
      x: -100,
      opacity: 0
    })

    gsap.set(rightContent, {
      x: 100,
      opacity: 0
    })

    // Create scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none none',
      }
    })

    // Animate left content from left
    tl.to(leftContent, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    })

    // Animate right content from right (slightly delayed)
    tl.to(rightContent, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.7') // Start 0.7 seconds before the left animation ends

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
      tl.kill()
    }
  }, [])

  return (
    <section ref={sectionRef} className="what-is-tedx-section">
      <div className="what-is-tedx-container">
        <div className="what-is-tedx-grid">
          {/* Left Column - Title */}
          <div ref={leftRef} className="what-is-tedx-left">
            <h2 className="what-is-tedx-title">
              What is TEDx?
            </h2>
            <a 
              href="https://www.ted.com/about/programs-initiatives/tedx-program" 
              target="_blank" 
              rel="noopener noreferrer"
              className="tedx-program-link"
            >
              TEDx PROGRAM →
            </a>
          </div>

          {/* Right Column - Content */}
          <div ref={rightRef} className="what-is-tedx-right">
            <p className="what-is-tedx-text">
              In the spirit of ideas worth spreading, TED has created a program called TEDx. 
              TEDx is a program of local, self-organized events that bring people together to 
              share a TED-like experience. Our event is called <strong>TEDxGRIET</strong>, where 
              x = independently organized TED event. At our TEDxGRIET event, TED Talks video 
              and live speakers will combine to spark deep discussion and connection in a small 
              group. The TED Conference provides general guidance for the TEDx program, but 
              individual TEDx events, including ours, are self-organized.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsTedx
