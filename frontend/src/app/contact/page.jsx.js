"use client"

import * as React from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Send, Clock, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { AnimatedHeading, Reveal } from "@/components/animated-text"
import { MagneticButton } from "@/components/magnetic-button"

const contactInfo = [
 { icon: Mail, title: "Email", value: "hello@folio.design", href: "mailto:hello@folio.design" },
 { icon: Phone, title: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
 { icon: MapPin, title: "Location", value: "San Francisco, CA", href: "#" },
 { icon: Clock, title: "Hours", value: "Mon - Fri: 9AM - 6PM", href: "#" },
]

const services = [
 "Brand Design",
 "Web Development",
 "UI/UX Design",
 "Digital Strategy",
 "Mobile Apps",
 "E-commerce",
]

export default function ContactPage() {
 const [submitted, setSubmitted] = React.useState(false)
 const [selectedServices, setSelectedServices] = React.useState([])

 const toggleService = (service: string) => {
 setSelectedServices(prev => 
 prev.includes(service) 
 ? prev.filter(s => s !== service)
 : [...prev, service]
 )
 }

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault()
 setSubmitted(true)
 }

 return (
 
 
 
 {/* Hero */}
 
 
 
 
 
 Get in Touch
 
 
 
 Let&apos;s start a{" "}
 conversation
 
 
 
 Have a project in mind? We&apos;d love to hear about it. 
 Reach out and let&apos;s explore how we can bring your vision to life.
 
 
 
 
 

 {/* Main Content */}
 
 
 {/* Contact Form */}
 
 
 
 {submitted ? (
 
 
 
 
 
 Message sent successfully!
 
 
 Thank you for reaching out. We&apos;ll review your message and get back to you within 24 hours.
 
 setSubmitted(false)}>
 Send another message
 
 
 ) : (
 
 {/* Name Fields */}
 
 
 
 First Name *
 
 <input
 type="text"
 id="firstName"
 required
 className="flex h-12 w-full rounded-xl border border-input bg-background px-4 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
 placeholder="John"
 />
 
 
 
 Last Name *
 
 <input
 type="text"
 id="lastName"
 required
 className="flex h-12 w-full rounded-xl border border-input bg-background px-4 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
 placeholder="Doe"
 />
 
 

 {/* Email & Company */}
 
 
 
 Email *
 
 <input
 type="email"
 id="email"
 required
 className="flex h-12 w-full rounded-xl border border-input bg-background px-4 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
 placeholder="john@example.com"
 />
 
 
 
 Company
 
 <input
 type="text"
 id="company"
 className="flex h-12 w-full rounded-xl border border-input bg-background px-4 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
 placeholder="Your company"
 />
 
 

 {/* Services */}
 
 
 Services Interested In
 
 
 {services.map((service) => (
 <button
 key={service}
 type="button"
 onClick={() => toggleService(service)}
 className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
 selectedServices.includes(service)
 ? "bg-foreground text-background border-foreground"
 : "border-border hover:border-foreground/50"
 }`}
 >
 {service}
 
 ))}
 
 

 {/* Budget */}
 
 
 Project Budget
 
 <select
 id="budget"
 className="flex h-12 w-full rounded-xl border border-input bg-background px-4 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
 >
 Select a budget range
 $5,000 - $10,000
 $10,000 - $25,000
 $25,000 - $50,000
 $50,000+
 
 

 {/* Message */}
 
 
 Message *
 
 <textarea
 id="message"
 rows={5}
 required
 className="flex w-full rounded-xl border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none"
 placeholder="Tell us about your project, goals, and timeline..."
 />
 

 {/* Submit */}
 <button
 type="submit"
 className="group w-full h-14 flex items-center justify-center gap-3 bg-foreground text-background rounded-xl font-medium transition-all duration-300 hover:bg-foreground/90"
 >
 Send Message
 
 
 
 )}
 
 
 

 {/* Contact Info Sidebar */}
 
 {/* Quick Contact */}
 
 
 Contact Information
 
 {contactInfo.map((item) => (
 <a
 key={item.title}
 href={item.href}
 className="flex items-start gap-4 group"
 >
 
 
 
 
 {item.title}
 {item.value}
 
 
 ))}
 
 
 

 {/* Social Links */}
 
 
 Follow Us
 
 {["Twitter", "LinkedIn", "Instagram", "Dribbble"].map((social) => (
 <a
 key={social}
 href="#"
 className="group flex items-center gap-2 px-4 py-2.5 rounded-full border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
 >
 {social}
 
 
 ))}
 
 
 

 {/* Schedule Call CTA */}
 
 
 Prefer to talk?
 
 Schedule a free 30-minute consultation call to discuss your project.
 
 <Link
 href="#"
 className="group inline-flex items-center gap-2 text-sm font-medium"
 >
 Schedule a Call
 
 
 
 
 
 
 

 {/* Map Section */}
 
 
 
 
 {/* Decorative grid pattern */}
 
 <div className="absolute inset-0" style={{
 backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
 backgroundSize: '40px 40px'
 }} />
 
 
 
 
 
 
 
 San Francisco, CA
 
 123 Design Street, Suite 100
 
 
 
 
 
 

 
 
 )
}
