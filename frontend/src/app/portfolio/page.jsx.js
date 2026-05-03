import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"
import { PortfolioFilter } from "@/components/portfolio-filter"
import { TestimonialsSection } from "@/components/testimonials"

export const metadata = {
 title: "Portfolio - Folio",
 description: "Explore our portfolio of successful projects spanning branding, web design, development, and more.",
}

export default function PortfolioPage() {
 return (
 
 
 
 {/* Hero - Asymmetrical Background */}
 
 {/* Asymmetrical background elements */}
 
 
 
 
 
 Our Work
 
 <h1 
 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-[1.1]"
 style={{ fontFamily: 'var(--font-display)' }}
 >
 Projects that speak for themselves
 
 
 A curated selection of our finest work, showcasing our expertise in 
 design, development, and digital strategy.
 
 
 
 

 {/* Portfolio Grid */}
 
 
 

 {/* Testimonials */}
 

 {/* CTA */}
 
 
 <h2 
 className="text-3xl font-bold tracking-tight sm:text-4xl"
 style={{ fontFamily: 'var(--font-display)' }}
 >
 Have a project in mind?
 
 
 Let&apos;s discuss how we can help bring your ideas to life.
 
 
 
 
 Start a Conversation
 
 
 
 
 
 

 
 
 )
}
