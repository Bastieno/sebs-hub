import { Check } from 'lucide-react'

export default function Pricing() {
  const timeSlots = [
    {
      name: 'Morning Access',
      time: '8AM – 12PM',
      price: '₦2,000',
      description: 'Perfect for early birds who love productive mornings',
      features: [
        'High-speed Wi-Fi',
        'Comfortable seating',
        'Light refreshments',
        'Quiet environment',
        'Natural lighting'
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Afternoon Access',
      time: '12PM – 5PM',
      price: '₦3,000',
      description: 'Our busiest time - great for networking and collaboration',
      features: [
        'High-speed Wi-Fi',
        'Comfortable seating',
        'Light refreshments',
        'Networking opportunities',
        'Community vibe'
      ],
      popular: true,
      color: 'from-amber-500 to-orange-600'
    },
    {
      name: 'Evening/Night',
      time: '6PM – 6AM',
      price: '₦5,000',
      description: 'Designed for night owls, creatives, and deep work sessions',
      features: [
        'High-speed Wi-Fi',
        'Comfortable seating',
        'Light refreshments',
        '12-hour access',
        'Perfect for deep work'
      ],
      popular: false,
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const membershipPlans = [
    {
      name: 'Monthly Access',
      price: '₦30,000',
      description: 'Day access with essential perks',
      features: [
        'Unlimited day access (8AM-6PM)',
        'Priority booking',
        'Member networking events',
        '10% discount on events',
        'Complimentary refreshments'
      ],
      popular: false
    },
    {
      name: 'Monthly Full Access',
      price: '₦40,000',
      description: 'Complete 24/7 access with premium benefits',
      features: [
        'Unlimited 24/7 access',
        'Priority booking for all spaces',
        'VIP member events',
        '15% discount on events',
        'Complimentary refreshments',
        'Dedicated storage space',
        'Member directory access'
      ],
      popular: true
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Flexible Pricing That{' '}
            <span className="gradient-text">Meets Your Hustle</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No monthly stress. Just pick, pay, and plug in. Choose the time slot that works for your schedule.
          </p>
        </div>

        {/* Time Slots */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Pay-As-You-Go Time Slots
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timeSlots.map((slot, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  slot.popular ? 'border-amber-500' : 'border-gray-200 hover:border-amber-300'
                }`}
              >
                {slot.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{slot.name}</h4>
                  <p className="text-lg text-gray-600 mb-4">{slot.time}</p>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${slot.color} bg-clip-text text-transparent mb-2`}>
                    {slot.price}
                  </div>
                  <p className="text-gray-600">{slot.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {slot.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://forms.gle/X6XRufwUn7dJrNf76"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    slot.popular
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:shadow-lg hover:scale-105'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-amber-500 hover:text-amber-600'
                  }`}
                >
                  Book This Slot
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Membership Plans */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Monthly Membership Plans
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {membershipPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-amber-500' : 'border-gray-200 hover:border-amber-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Best Value
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                  <div className="text-4xl font-bold gradient-text mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfzkOJ5328YG_NK6IsnRdWWYW-3zRHUZZ9WV80_SI_srMHGKw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:shadow-lg hover:scale-105'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-amber-500 hover:text-amber-600'
                  }`}
                >
                  Join as Member
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offer */}
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">First-Time Visitor Bonus! 🎉</h3>
          <p className="text-lg mb-6">
            Get a complimentary drink and branded merchandise on your first visit. 
            Plus, refer a friend and both of you get 10% off your next booking!
          </p>
          <a
            href="https://forms.gle/X6XRufwUn7dJrNf76"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Claim Your Bonus
          </a>
        </div>
      </div>
    </section>
  )
}
