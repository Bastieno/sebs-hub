export default function Marquee() {
  const items = [
    'Freelancers',
    'Founders', 
    'Remote Workers',
    'Digital Creators',
    'Night Owls',
    'Dreamers',
    'Change Makers',
    'Innovators',
    'Creative Thinkers',
    'Idea Makers'
  ]

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          More than Co-working
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The perfect ambience to do work you love. We create spaces for.
        </p>
      </div>

      {/* First Marquee Row */}
      <div className="relative flex overflow-hidden mb-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((item, index) => (
            <div key={`first-${index}`} className="mx-8 flex items-center">
              <span className="text-4xl md:text-6xl font-bold text-gray-800 hover:text-amber-600 transition-colors cursor-default">
                {item}
              </span>
              <div className="w-2 h-2 bg-amber-500 rounded-full mx-8" />
            </div>
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
          {items.map((item, index) => (
            <div key={`first-duplicate-${index}`} className="mx-8 flex items-center">
              <span className="text-4xl md:text-6xl font-bold text-gray-800 hover:text-amber-600 transition-colors cursor-default">
                {item}
              </span>
              <div className="w-2 h-2 bg-amber-500 rounded-full mx-8" />
            </div>
          ))}
        </div>
      </div>

      {/* Second Marquee Row (Reverse Direction) */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {items.reverse().map((item, index) => (
            <div key={`second-${index}`} className="mx-8 flex items-center">
              <span className="text-4xl md:text-6xl font-bold text-gray-300 hover:text-amber-600 transition-colors cursor-default">
                {item}
              </span>
              <div className="w-2 h-2 bg-orange-500 rounded-full mx-8" />
            </div>
          ))}
        </div>
        <div className="flex animate-marquee-reverse whitespace-nowrap" aria-hidden="true">
          {items.map((item, index) => (
            <div key={`second-duplicate-${index}`} className="mx-8 flex items-center">
              <span className="text-4xl md:text-6xl font-bold text-gray-300 hover:text-amber-600 transition-colors cursor-default">
                {item}
              </span>
              <div className="w-2 h-2 bg-orange-500 rounded-full mx-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
