"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ArrowDown, Briefcase, Code, Palette, Users, Star } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"
import { PortfolioFilter } from "@/components/portfolio-filter"
import { TestimonialsSection } from "@/components/testimonials"
import { BlogPreview } from "@/components/blog-preview"
import { StatsSection } from "@/components/stats"
import { MagneticButton, CircleButton } from "@/components/magnetic-button"
import { AnimatedHeading, Reveal } from "@/components/animated-text"
import { MarqueeSection } from "@/components/marquee"
import { PremiumHero } from "@/components/premium-hero"

const services = [
 {
 icon: Palette,
 title: "Brand Design",
 description: "Creating memorable brand identities that resonate with your audience and stand the test of time.",
 number: "01",
 },
 {
 icon: Code,
 title: "Web Development",
 description: "Building fast, responsive, and accessible websites using modern technologies and best practices.",
 number: "02",
 },
 {
 icon: Briefcase,
 title: "Digital Strategy",
 description: "Developing comprehensive digital strategies that drive growth and maximize your online presence.",
 number: "03",
 },
 {
 icon: Users,
 title: "UI/UX Design",
 description: "Designing intuitive user experiences that delight users and achieve business objectives.",
 number: "04",
 },
]

const clients = [
 "Google", "Apple", "Microsoft", "Amazon", "Meta", "Netflix", "Spotify", "Airbnb"
]

export default function HomePage() {
 return (
 
 
 
 {/* Premium Hero Section */}
 

 {/* Clients Marquee */}
 

 {/* Stats */}
 

 {/* Services Section */}
 
 {/* Transition Element */}
 
 
 
 {/* Left: Header */}
 
 
 
 Services
 
 
 
 Expertise that delivers results
 
 
 
 I combine strategy, design, and technology to help brands create 
 meaningful connections with their audience.
 
 
 
 
 
 All Services
 
 
 
 

 {/* Right: Services Grid - Asymmetrical Layout */}
 <motion.div
 className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, amount: 0.2 }}
 variants={{
 visible: {
 transition: {
 staggerChildren: 0.1,
 delayChildren: 0.1,
 },
 },
 }}
 >
 {services.map((service, index) => (
 <motion.div
 key={service.title}
 variants={{
 hidden: { opacity: 0, y: 30 },
 visible: {
 opacity: 1,
 y: 0,
 transition: { duration: 0.6, ease: "easeOut" },
 },
 }}
 className={`group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-foreground/20 transition-all duration-500 hover:shadow-xl hover:translate-y-[-8px] ${
 index % 3 === 0 ? 'md:col-span-2' : 'md:col-span-1'
 }`}
 >
 
 
 
 {service.number}
 
 
 
 
 {service.title}
 
 
 {service.description}
 
 
 
 
 
 
 
 ))}
 
 
 

 {/* Portfolio Section */}
 
 
 
 
 
 Portfolio
 
 
 
 Selected work
 
 
 
 
 View All
 
 
 
 
 

 {/* Testimonials */}
 

 {/* Blog Preview */}
 
 
 
 
 
 Insights
 
 
 
 Latest articles
 
 
 
 
 All Articles
 
 
 
 
 

 {/* CTA Section */}
 
 
 
 
 
 
 
 
 
 Have a project
 
 in mind?
 
 
 
 
 Let&apos;s collaborate and create something extraordinary together.
 
 
 
 
 <Link
 href="/contact"
 className="group inline-flex items-center gap-4 px-10 py-5 text-lg font-medium text-foreground bg-background rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105"
 >
 Start a Conversation
 
 
 
 
 
 
 
 

 
 
 )
}
