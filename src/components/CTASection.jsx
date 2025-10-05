import React from 'react'

const CTASection = () => {
  const ctas = [
    {
      text: 'Know someone for our stage?',
      button: 'NOMINATE A SPEAKER',
      link: '#nominate-speaker'
    },
    {
      text: 'Want to get involved with TEDxGRIET?',
      button: 'BECOME A VOLUNTEER',
      link: '#volunteer'
    },
    {
      text: 'Interested in being a sponsor?',
      button: 'PARTNER WITH US',
      link: '#partners'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {ctas.map((cta, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <p className="text-xl md:text-2xl font-semibold mb-6 min-h-[60px] flex items-center justify-center">
                {cta.text}
              </p>
              <a href={cta.link} className="btn-primary">
                {cta.button} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CTASection

