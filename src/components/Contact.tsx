'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import emailjs from '@emailjs/browser'
import { MapPin, Mail, Phone, Twitter, Instagram, Clock, Loader2, CheckCircle, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional().refine((val) => {
    if (!val) return true // Optional field
    const phoneRegex = /^[\+]?[0-9][\d]{6,15}$/
    return phoneRegex.test(val.replace(/[\s\-\(\)]/g, ''))
  }, 'Please enter a valid phone number'),
  inquiryType: z.string().min(1, 'Please select an inquiry type'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters')
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: ''
    }
  })

  // Check for URL parameters to auto-select inquiry type
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const inquiryType = urlParams.get('inquiryType')
    if (inquiryType === 'story') {
      setValue('inquiryType', 'story', { shouldValidate: true })
    }
  }, [setValue])

  // Listen for custom event from "Share Your Story" button
  useEffect(() => {
    const handleStoryButtonClick = () => {
      setValue('inquiryType', 'story', { shouldValidate: true })
    }

    window.addEventListener('storyButtonClicked', handleStoryButtonClick)
    
    return () => {
      window.removeEventListener('storyButtonClicked', handleStoryButtonClick)
    }
  }, [setValue])

  // Initialize EmailJS from environment variables
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || 'Not provided',
        inquiry_type: data.inquiryType,
        message: data.message,
        to_email: 'sebastienohub@gmail.com',
        time: new Date().toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short'
        })
      }

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      setSubmitStatus('success')
      reset() // Reset form after successful submission
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSelectChange = (value: string) => {
    setValue('inquiryType', value, { shouldValidate: true })
  }

  // Auto-dismiss alerts after 5 seconds
  useEffect(() => {
    if (submitStatus === 'success' || submitStatus === 'error') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Got Questions?{" "}
            <span className="gradient-text">Let&apos;s Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Want to collaborate? Need directions? Or just want to say hello?
            We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Visit Us
                    </h4>
                    <a
                      href="https://www.google.com/maps/place/Sebs+Hub/@7.41678,3.9045768,17z/data=!3m1!4b1!4m6!3m5!1s0x10398d0038eb366d:0xd1cd1cde7c95f7ac!8m2!3d7.41678!4d3.9045768!16s%2Fg%2F11x82ytchf?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 cursor-pointer transition-colors duration-200"
                    >
                      <p>No 32, Awolowo Avenue, Bodija, Ibadan, Oyo State, Nigeria</p>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:sebastienohub@gmail.com"
                      className="text-amber-600 hover:text-amber-700"
                    >
                      sebastienohub@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Phone/WhatsApp
                    </h4>
                    <a
                      href="https://wa.me/2348107180312"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700"
                    >
                      +234 810 718 0312
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white">
                    <div className="flex space-x-1">
                      <Instagram className="w-3 h-3" />
                      <Twitter className="w-3 h-3" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Social Media
                    </h4>
                    <div className="space-y-1">
                      <a
                        href="https://www.instagram.com/sebshub_co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-amber-600 hover:text-amber-700"
                      >
                        @sebshub_co on Instagram
                      </a>
                      <a
                        href="https://x.com/sebshub_co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-amber-600 hover:text-amber-700"
                      >
                        @sebshub_co on Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-5 h-5 text-amber-600" />
                <h4 className="text-lg font-semibold text-gray-900">
                  Operating Hours
                </h4>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Morning Slots</span>
                  <span>8:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Afternoon Slots</span>
                  <span>12:00 PM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Evening/Night Slots</span>
                  <span>6:00 PM - 6:00 AM</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold text-gray-900">
                    <span>24/7 Access</span>
                    <span>Always Open</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800 font-medium">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-800 font-medium">
                    Failed to send message. Please try again or contact us directly.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    {...register('name')}
                    className={errors.name ? 'border-red-500' : ''}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    {...register('email')}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+234 XXX XXX XXXX"
                  {...register('phone')}
                  className={errors.phone ? 'border-red-500' : ''}
                />
                {errors.phone && (
                  <p className="text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="inquiryType">What do you need? *</Label>
                <Select onValueChange={handleSelectChange} value={watch('inquiryType')}>
                  <SelectTrigger className={`w-full ${errors.inquiryType ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="booking">Booking Inquiry</SelectItem>
                    <SelectItem value="membership">
                      Membership Information
                    </SelectItem>
                    <SelectItem value="event">Event Hosting</SelectItem>
                    <SelectItem value="partnership">
                      Partnership/Collaboration
                    </SelectItem>
                    <SelectItem value="story">Share a story</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.inquiryType && (
                  <p className="text-sm text-red-600">{errors.inquiryType.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us more about your inquiry..."
                  {...register('message')}
                  className={errors.message ? 'border-red-500' : ''}
                />
                {errors.message && (
                  <p className="text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
