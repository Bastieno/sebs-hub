'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Seb&apos;s Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">
              About
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-amber-600 transition-colors">
              Services
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-amber-600 transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-amber-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSer6t1mmPg6iAs-s2DKDKJMMa_BNFEu-Bg-2ZIa1PU2F2cXvw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">
                About
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-amber-600 transition-colors">
                Services
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-amber-600 transition-colors">
                Pricing
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-amber-600 transition-colors">
                Testimonials
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">
                Contact
              </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSer6t1mmPg6iAs-s2DKDKJMMa_BNFEu-Bg-2ZIa1PU2F2cXvw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full font-medium text-center hover:shadow-lg transition-all duration-300"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
