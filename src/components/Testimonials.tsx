'use client'

import { useState, useEffect } from 'react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Yinka A.',
      role: 'Content Strategist & Freelancer',
      content: "Seb's Hub is my productivity plug. As a content strategist, I've worked from several spaces but this one gets it right — good vibes, no noise, and always light.",
      rating: 5
    },
    {
      name: 'Dami O.',
      role: 'Brand Coach',
      content: "I hosted my first paid training here, and it was seamless. The space has everything you need — and nothing you don't.",
      rating: 5
    },
    {
      name: 'Bolu F.',
      role: 'UI/UX Designer',
      content: "As someone who works better at night, finding a 6PM–6AM coworking setup is gold. No interruptions, stable light, and total peace.",
      rating: 5
    },
    {
      name: 'Rita A.',
      role: 'Copywriter',
      content: "I started coming to Seb's in March. I've since launched a digital product, met a collaborator, and finally found peace to work at night!",
      rating: 5
    },
    {
      name: 'Josh O.',
      role: 'Creative Coach',
      content: "I teach design. Hosting my classes here gives my students real comfort, fast Wi-Fi, and zero interruptions. Highly recommended.",
      rating: 5
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Don&apos;t Believe Us?{' '}
            <span className="gradient-text">Hear from Our Patrons</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who&apos;ve found their productivity home at Seb&apos;s Hub.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center">
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              &ldquo;{testimonials[currentTestimonial].content}&rdquo;
            </blockquote>
            
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <div className="text-lg font-semibold text-gray-900">
              {testimonials[currentTestimonial].name}
            </div>
            <div className="text-gray-600">
              {testimonials[currentTestimonial].role}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-amber-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-amber-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-amber-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                index === currentTestimonial
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-gray-200 bg-white hover:border-amber-300'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
              <div className="text-gray-600 text-xs">{testimonial.role}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Share Your Seb&apos;s Story?
          </h3>
          <p className="text-gray-600 mb-6">
            We&apos;d love to hear about your experience and feature your success story.
          </p>
          <a
            href="#contact-form?inquiryType=story"
            onClick={(e) => {
              e.preventDefault()
              // Add URL parameter and navigate to contact form
              const url = new URL(window.location.href)
              url.searchParams.set('inquiryType', 'story')
              window.history.pushState({}, '', url.toString())
              
              // Scroll directly to the contact form
              const contactForm = document.getElementById('contact-form')
              if (contactForm) {
                contactForm.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                })
              }
              
              // Trigger a custom event to notify the Contact component
              window.dispatchEvent(new CustomEvent('storyButtonClicked'))
            }}
            className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Share Your Story
          </a>
        </div>
      </div>
    </section>
  )
}
