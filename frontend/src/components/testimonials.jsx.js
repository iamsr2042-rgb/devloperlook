"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Section } from "@/components/section"
import { AnimatedHeading, Reveal } from "@/components/animated-text"

const testimonials = [
 {
 quote: "Working with this team has been transformative for our brand. Their attention to detail and creative vision exceeded our expectations at every turn.",
 author: "Sarah Chen",
 role: "CEO, TechFlow",
 image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
 rating: 5,
 },
 {
 quote: "The level of professionalism and creativity brought to our project was exceptional. They truly understood our vision and brought it to life beautifully.",
 author: "Michael Torres",
 role: "Founder, Startup Labs",
 image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
 rating: 5,
 },
 {
 quote: "An incredible partner for any digital project. Their strategic approach combined with flawless execution delivered results beyond our expectations.",
 author: "Emily Watson",
 role: "Marketing Director, Bloom Co",
 image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
 rating: 5,
 },
]

export function TestimonialsSection() {
 const [activeIndex, setActiveIndex] = React.useState(0)

 const goToNext = () => {
 setActiveIndex((prev) => (prev + 1) % testimonials.length)
 }

 const goToPrev = () => {
 setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
 }

 const activeTestimonial = testimonials[activeIndex]

 return (
 
 
 {/* Left: Content */}
 
 
 
 Testimonials
 
 
 
 What clients say
 

 {/* Quote */}
 
 
 
 
 <motion.blockquote
 key={activeIndex}
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -10 }}
 transition={{ duration: 0.5, ease: "easeInOut" }}
 className={cn(
 "relative pl-8 text-xl md:text-2xl leading-relaxed text-foreground/90"
 )}
 style={{ fontFamily: 'var(--font-display)' }}
 >
 &ldquo;{activeTestimonial.quote}&rdquo;
 
 

 {/* Author */}
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.2 }}
 className="mt-8 pl-8 flex items-center gap-4"
 >
 
 <Image
 src={activeTestimonial.image}
 alt={activeTestimonial.author}
 fill
 className="object-cover"
 />
 
 
 {activeTestimonial.author}
 {activeTestimonial.role}
 
 
 {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
 
 ))}
 
 
 

 {/* Navigation */}
 
 <button
 onClick={goToPrev}
 className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
 >
 
 
 <button
 onClick={goToNext}
 className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
 >
 
 
 
 {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
 
 
 

 {/* Right: Large Image or Decorative Element */}
 
 
 {/* Decorative circles */}
 
 
 
 
 
 
 {/* Center content */}
 
 
 
 {testimonials.length}
 
 
 Happy Clients
 
 
 

 {/* Floating avatars */}
 {testimonials.map((testimonial, index) => (
 <div
 key={testimonial.author}
 className={cn(
 "absolute h-16 w-16 rounded-full overflow-hidden ring-4 ring-background transition-all duration-500",
 index === 0 && "top-0 left-1/2 -translate-x-1/2",
 index === 1 && "bottom-8 left-8",
 index === 2 && "bottom-8 right-8",
 activeIndex === index ? "scale-125 ring-accent" : "opacity-50"
 )}
 >
 <Image
 src={testimonial.image}
 alt={testimonial.author}
 fill
 className="object-cover"
 />
 
 ))}
 
 
 
 
 )
}
