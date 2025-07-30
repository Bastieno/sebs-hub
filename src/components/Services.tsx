'use client'

import { useState } from 'react'
import { Laptop, Users, Palette, BookOpen, PartyPopper, Sun, Check } from 'lucide-react'

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 1,
      title: 'Flexible Workstations',
      description: 'Comfortable desks with reliable power and high-speed internet. Perfect for focused work sessions.',
      features: ['High-speed Wi-Fi', 'Comfortable seating', 'Power outlets', 'Natural lighting'],
      icon: Laptop
    },
    {
      id: 2,
      title: 'Meeting Rooms',
      description: 'Private spaces for team meetings, client calls, and collaborative sessions.',
      features: ['Private rooms', 'Video conferencing setup', 'Whiteboard access', 'Professional ambiance'],
      icon: Users
    },
    {
      id: 3,
      title: 'Creator Rooms',
      description: 'Specialized spaces for content creation, podcasting, and creative work.',
      features: ['Soundproof rooms', 'Professional lighting', 'Recording equipment', 'Creative setup'],
      icon: Palette
    },
    {
      id: 4,
      title: 'Training Spaces',
      description: 'Large rooms perfect for workshops, training sessions, and educational events.',
      features: ['Projector & screen', 'Flexible seating', 'Audio system', 'Workshop materials'],
      icon: BookOpen
    },
    {
      id: 5,
      title: 'Event Hosting',
      description: 'Full space bookings for launches, networking events, and community gatherings.',
      features: ['Full venue access', 'Event planning support', 'Catering options', 'Custom setup'],
      icon: PartyPopper
    },
    {
      id: 6,
      title: '24/7 Solar Power',
      description: 'Uninterrupted power supply with our solar energy system. Work anytime, day or night.',
      features: ['Solar powered', '24/7 availability', 'Backup systems', 'Eco-friendly'],
      icon: Sun
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{' '}
            <span className="gradient-text">Get Things Done</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From individual workstations to full event spaces, we&apos;ve designed every corner 
            with productivity and comfort in mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer card-hover ${
                activeService === index
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-gray-200 bg-white hover:border-amber-300'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className="w-12 h-12 text-amber-600 mb-4">
                <service.icon className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <Check className="w-4 h-4 text-amber-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Pick a Time Slot</h4>
              <p className="text-gray-600">Choose from morning, afternoon, or overnight sessions based on your schedule.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Pay & Show Up</h4>
              <p className="text-gray-600">Simple booking process with flexible payment options. Just arrive and start working.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Work, Recharge, Repeat</h4>
              <p className="text-gray-600">Enjoy uninterrupted productivity in our comfortable, solar-powered environment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
