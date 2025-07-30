"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const audienceTypes = [
  {
    name: "Digital Creators",
    image: "https://ext.same-assets.com/4043744079/4113422493.jpeg",
  },
  {
    name: "Coffee Lovers",
    image: "https://ext.same-assets.com/4043744079/305895449.jpeg",
  },
  {
    name: "Change Makers",
    image: "https://ext.same-assets.com/4043744079/4002808463.jpeg",
  },
  {
    name: "Founders",
    image: "https://ext.same-assets.com/4043744079/1326415159.jpeg",
  },
  {
    name: "Dreamers",
    image: "https://ext.same-assets.com/4043744079/2206716433.jpeg",
  },
];

const audienceTypes2 = [
  {
    name: "Students",
    image: "https://ext.same-assets.com/4043744079/4113422493.jpeg",
  },
  {
    name: "Innovators",
    image: "https://ext.same-assets.com/4043744079/305895449.jpeg",
  },
  {
    name: "Creative Thinkers",
    image: "https://ext.same-assets.com/4043744079/4002808463.jpeg",
  },
  {
    name: "Idea Makers",
    image: "https://ext.same-assets.com/4043744079/1326415159.jpeg",
  },
  {
    name: "Digital Nomads",
    image: "https://ext.same-assets.com/4043744079/2206716433.jpeg",
  },
];

export default function TargetAudienceSection() {
  // Create enough duplicates for seamless infinite scroll (3 copies for -33.333% animation)
  const extendedAudienceTypes = [
    ...audienceTypes,
    ...audienceTypes,
    ...audienceTypes,
  ];
  const extendedAudienceTypes2 = [
    ...audienceTypes2,
    ...audienceTypes2,
    ...audienceTypes2,
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
          <Badge
            variant="outline"
            className="text-[#dc3b3f] border-[#dc3b3f] mb-4 px-4 py-2"
          >
            MORE THAN CO-WORKING
          </Badge>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
          The perfect ambience to do work you love.{" "}
          <span className="text-gray-500">We create spaces for</span>
          <span className="text-[#dc3b3f]">.</span>
        </h2>
      </div>

      {/* Full width container for animations */}
      <div className="w-full overflow-hidden">
        {/* First Row - Moving Right */}
        <div className="relative mb-8">
          <div
            className="flex animate-scroll-right gap-6"
            style={{ width: "fit-content" }}
          >
            {extendedAudienceTypes.map((type, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-100 rounded-full px-4 py-3 whitespace-nowrap flex-shrink-0 min-w-fit"
              >
                <Image
                  src={type.image}
                  alt={type.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full mr-3 object-cover flex-shrink-0"
                />
                <span className="font-medium text-gray-900 text-sm sm:text-base">
                  {type.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Moving Left */}
        <div className="relative">
          <div
            className="flex animate-scroll-left gap-6"
            style={{ width: "fit-content" }}
          >
            {extendedAudienceTypes2.map((type, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-100 rounded-full px-4 py-3 whitespace-nowrap flex-shrink-0 min-w-fit"
              >
                <Image
                  src={type.image}
                  alt={type.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full mr-3 object-cover flex-shrink-0"
                />
                <span className="font-medium text-gray-900 text-sm sm:text-base">
                  {type.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
