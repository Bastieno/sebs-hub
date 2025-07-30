export default function About() {
  const features = [
    {
      icon: '⚡',
      title: 'Solar-Powered, Always On',
      description: 'Reliable 24/7 power with our advanced solar energy system. No more NEPA frustrations.'
    },
    {
      icon: '💰',
      title: 'Pay-As-You-Go Flexibility',
      description: 'Choose from ₦2K, ₦3K, or ₦5K slots. Pay only for the time you actually use.'
    },
    {
      icon: '📶',
      title: 'Stable Wi-Fi',
      description: 'High-speed internet that actually works. Because buffering shouldn\'t be part of your workflow.'
    },
    {
      icon: '❄️',
      title: 'Comfortable & Quiet',
      description: 'AC-ventilated rooms designed for deep work. Thoughtfully designed for maximum productivity.'
    },
    {
      icon: '🤝',
      title: 'Like-Minded Community',
      description: 'Connect with creators, founders, and professionals who value purpose and productivity.'
    },
    {
      icon: '🎯',
      title: 'Events & Networking',
      description: 'Regular meetups, workshops, and networking events to grow your professional circle.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              More Than Desks.{' '}
              <span className="gradient-text">We&apos;re a Movement</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Seb&apos;s Hub was created out of frustration — the kind that comes when you&apos;re 
                ready to do great work but can&apos;t find reliable space, power, or peace.
              </p>
              
              <p>
                We built this place for people like us — freelancers, small teams, dreamers, 
                night owls, creators, and remote workers who don&apos;t want to be at the mercy 
                of NEPA or noisy cafés.
              </p>
              
              <p>
                We&apos;re a space that works as hard as you do. Minimalist, solar-powered, 
                accessible, and intentionally affordable.
              </p>
              
              <p className="text-xl font-semibold text-gray-900">
                At Seb&apos;s, your hustle finally feels seen.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Built With Intention</h3>
                <p className="text-gray-600">Powered by Purpose</p>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-amber-600">24/7</div>
              <div className="text-sm text-gray-600">Solar Power</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-amber-600">100%</div>
              <div className="text-sm text-gray-600">Productivity</div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Built With Intention. Powered by Purpose.
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-amber-50 transition-colors duration-300 card-hover"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            What if people had space that supported their ambition and productivity?
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            We&apos;re not your typical coworking space. We are a community-powered creative hub 
            built for freelancers, founders, remote workers, and doers who want flexible access, 
            steady energy, and space to actually think.
          </p>
          <div className="text-lg font-medium">
            No distractions. Just space, comfort, and community.
          </div>
        </div>
      </div>
    </section>
  )
}
