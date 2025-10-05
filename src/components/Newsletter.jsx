import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus(''), 3000)
    }
  }

  return (
    <section className="py-20 bg-tedx-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xl md:text-2xl mb-8">
          Drop your email and we'll keep you posted on all things <strong>TEDxGRIET</strong>
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-full text-tedx-black focus:outline-none focus:ring-2 focus:ring-tedx-red"
            required
          />
          <button type="submit" className="btn-primary bg-tedx-red hover:bg-red-700">
            Subscribe
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-green-400 font-semibold">
            Thank you! Your submission has been received!
          </p>
        )}
      </div>
    </section>
  )
}

export default Newsletter

