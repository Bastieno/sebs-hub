import { Check, Star, Zap, Clock, Users, Shield } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'

export default function MembershipPage() {
  const membershipPlans = [
    {
      name: 'Standard Membership',
      price: '₦30,000',
      period: '/month',
      description: 'Access to your chosen time slot with essential perks',
      timeSlot: 'Morning, Afternoon, OR Night',
      features: [
        'Access to your chosen time slot (Morning, Afternoon, OR Night)',
        'Consistent, dedicated workspace during your preferred hours',
        'High-speed Wi-Fi and power outlets',
        'Comfortable seating and work environment',
        'Perfect for established routines and specific peak productivity times'
      ],
      icon: Clock,
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Premium Membership',
      price: '₦40,000',
      period: '/month',
      description: '24/7 unlimited coworking access across ALL time slots',
      timeSlot: '24/7 Unlimited Access',
      features: [
        '24/7 unlimited coworking access across ALL time slots',
        'Complete flexibility to work whenever inspiration strikes',
        'Reserved private work corners',
        'Priority booking for all spaces',
        'VIP member events and networking',
        'The ultimate choice for maximum productivity and convenience'
      ],
      icon: Zap,
      popular: true,
      color: 'from-amber-500 to-orange-600'
    }
  ]

  return (
    <main className="min-h-screen overflow-hidden">
      <Header />

      {/* Membership Hero Section */}
      <section className="relative min-[60vh] flex items-center justify-center hero-gradient overflow-hidden pt-32 pb-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Choose Your Perfect{" "}
              <span className="gradient-text">Workspace Plan</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Maximum Value, Ultimate Flexibility — Whether you&apos;re a solo
              creative, remote professional, or collaborative team seeking
              flexible space.
            </p>

            {/* Value Proposition */}
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              We have a plan tailored to your unique needs and working style,
              with the space, light, and peace of mind you deserve.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-500/20 rounded-full animate-float" />
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-orange-500/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-amber-400/20 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        />
      </section>

      {/* Value Proposition */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="text-center mb-8">
              <Star className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Premium is Your Best Investment
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                <strong>
                  Life doesn&apos;t follow a schedule, and neither should your
                  creativity.
                </strong>{" "}
                With Premium membership, you have the freedom to seamlessly
                transition between morning brainstorming, afternoon
                collaboration, and late-night deep work — all within the same
                membership. Your growth, comfort, and productivity remain our
                top priorities.
              </p>
            </div>
          </div>

          {/* Membership Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {membershipPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? "border-amber-500 ring-4 ring-amber-100"
                      : "border-gray-200 hover:border-amber-300"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                        ⭐ Best Value
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div
                      className={`inline-flex p-3 rounded-full bg-gradient-to-r ${plan.color} mb-4`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span
                        className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
                      >
                        {plan.price}
                      </span>
                      <span className="text-gray-500 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div
                      className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                        plan.popular
                          ? "bg-amber-100 text-amber-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {plan.timeSlot}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://forms.gle/X6XRufwUn7dJrNf76"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-4 px-6 rounded-full font-semibold text-lg transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:shadow-xl hover:scale-105"
                        : "border-2 border-gray-300 text-gray-700 hover:border-amber-500 hover:text-amber-600 hover:shadow-lg"
                    }`}
                  >
                    Choose {plan.name}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Additional Benefits */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Community Focus
              </h3>
              <p className="text-gray-600">
                Join a thriving creative community where ideas flourish and
                connections bloom.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Shield className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Reliable Environment
              </h3>
              <p className="text-gray-600">
                Solar-powered, well-ventilated space designed for comfort and
                productivity.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Zap className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Flexible Access
              </h3>
              <p className="text-gray-600">
                Time-based plans that ensure everyone enjoys optimal working
                conditions.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 hero-gradient rounded-2xl p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Have questions or need guidance choosing the perfect plan?
              We&apos;re here to help! Reach out via WhatsApp or visit our
              friendly team at the front desk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.whatsapp.com/F4mjMYARsnpKo743Bthl9K"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Join as Member
              </a>
              <Link
                href="/#contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
