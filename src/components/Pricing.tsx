import { Wifi, Zap, Wind, Volume2, Sofa, Car, Gift, Moon } from 'lucide-react'

const slotAmenities = [
  { icon: Wifi,     label: 'Fast WiFi' },
  { icon: Zap,      label: 'Steady Power' },
  { icon: Wind,     label: 'Air Conditioning' },
  { icon: Volume2,  label: 'Quiet Zones' },
  { icon: Sofa,     label: 'Lounge Access' },
]

const subscriptionPerks = [
  { icon: Wifi,     label: 'Fast WiFi' },
  { icon: Zap,      label: 'Steady Power' },
  { icon: Wind,     label: 'Air Conditioning' },
  { icon: Volume2,  label: 'Quiet Zones' },
  { icon: Sofa,     label: 'Lounge Access' },
  { icon: Car,      label: 'Free Parking' },
  { icon: Gift,     label: 'Free Shawarma or Chicken & Chips' },
]

export default function Pricing() {
  const timeSlots = [
    {
      name: 'Morning',
      time: '8AM – 12PM',
      price: '₦3,000',
      description: 'Perfect for early birds who love productive mornings',
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Afternoon',
      time: '12PM – 5PM',
      price: '₦4,000',
      description: 'Great for networking and collaboration',
      popular: true,
      color: 'from-amber-500 to-orange-600'
    },
    {
      name: 'Night',
      time: '6PM – 6AM',
      price: '₦5,000',
      description: 'Ideal for night owls and deep work sessions',
      popular: false,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Full Day',
      time: '8AM – 5PM',
      price: '₦5,000',
      description: 'Morning through afternoon in one pass',
      popular: false,
      color: 'from-teal-500 to-teal-600'
    },
    {
      name: 'Hourly',
      time: 'Per Hour',
      price: '₦1,000',
      description: 'Drop in and pay only for what you use',
      popular: false,
      color: 'from-green-500 to-green-600'
    }
  ]

  const membershipPlans = [
    {
      name: 'Weekly',
      price: '₦15,000',
      duration: '7-day access',
      popular: false
    },
    {
      name: 'Bi-Weekly',
      price: '₦25,000',
      duration: '15-day access',
      popular: false
    },
    {
      name: 'Monthly',
      price: '₦40,000',
      duration: 'Full month',
      popular: true
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Flexible Pricing That{" "}
            <span className="gradient-text">Meets Your Hustle</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No monthly stress. Just pick, pay, and plug in. Choose the time slot
            that works for your schedule.
          </p>
        </div>

        {/* Time Slots */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Pay-As-You-Go Time Slots
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 pt-6">
            {timeSlots.map((slot, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-6 border-2 transition-all duration-300 hover:scale-105 ${
                  slot.popular
                    ? "border-amber-500"
                    : "border-gray-200 hover:border-amber-300"
                }`}
              >
                {slot.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h4 className="text-base font-bold text-gray-900 mb-1">
                    {slot.name}
                  </h4>
                  <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">{slot.time}</p>
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${slot.color} bg-clip-text text-transparent mb-3`}
                  >
                    {slot.price}
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{slot.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Shared amenities strip */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {slotAmenities.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-600">
                <Icon className="w-4 h-4 text-amber-500" />
                {label}
              </div>
            ))}
          </div>

          {/* Special Team Night Plan */}
          <div className="mt-12 hero-gradient rounded-2xl p-8 text-center text-white">
            <h4 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <Moon className="w-6 h-6" />
              Special Team Night Plan
            </h4>
            <p className="text-lg mb-6">
              For groups of 10-14 users looking for collaborative evening
              workspace. Perfect for team projects, hackathons, and group study
              sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/X6XRufwUn7dJrNf76"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Contact for Pricing
              </a>
            </div>
          </div>
        </div>

        {/* Membership Plans */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Subscription Plans
          </h3>
          <p className="text-center text-gray-500 text-sm mb-12">All plans include 24/7 access</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-6">
            {membershipPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-6 border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "border-amber-500"
                    : "border-gray-200 hover:border-amber-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold">
                      Best Value
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {plan.name}
                  </h4>
                  <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">{plan.duration}</p>
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {plan.price}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Shared subscription perks strip */}
          <div className="mt-8 max-w-5xl mx-auto">
            <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-4">Everything included in every plan</p>
            <div className="flex flex-wrap justify-center gap-4">
              {subscriptionPerks.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-gray-600">
                  <Icon className="w-4 h-4 text-amber-500" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Special Offer */}
        <div className="mt-16 hero-gradient rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            First-Time Visitor Bonus! 🎉
          </h3>
          <p className="text-lg mb-6">
            Get a complimentary drink and branded merchandise on your first
            visit. Plus, refer a friend and both of you get 10% off your next
            booking!
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
  );
}
