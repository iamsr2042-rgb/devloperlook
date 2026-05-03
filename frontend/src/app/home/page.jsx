import Link from "next/link"
import { ArrowRight, User, Building2, Briefcase } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"

export const metadata = {
 title: "Homepage Variants - Folio",
 description: "Choose from our collection of homepage layouts designed for different use cases.",
}

const variants = [
 {
 icon: User,
 title: "Personal",
 description: "Perfect for individual professionals, developers, and designers showcasing their personal brand and portfolio.",
 href: "/home/personal",
 features: ["Split hero layout", "Skills showcase", "Timeline experience", "Social links"],
 },
 {
 icon: Building2,
 title: "Agency",
 description: "Designed for digital agencies and studios looking to highlight their team, services, and client work.",
 href: "/home/agency",
 features: ["Client logos", "Team showcase", "Featured work grid", "Process section"],
 },
 {
 icon: Briefcase,
 title: "Freelancer",
 description: "Ideal for freelancers and consultants with transparent pricing and a focus on services and testimonials.",
 href: "/home/freelancer",
 features: ["Pricing cards", "Process steps", "FAQ section", "Availability badge"],
 },
]

export default function HomeVariantsPage() {
 return (
 
 
 
 {/* Hero */}
 
 
 
 
 Homepage Variants
 
 <h1 
 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
 style={{ fontFamily: 'var(--font-display)' }}
 >
 Choose your style
 
 
 This template includes three distinct homepage layouts, each designed 
 for different use cases. Explore them below.
 
 
 
 

 {/* Variants Grid */}
 
 
 {variants.map((variant) => (
 <Link
 key={variant.title}
 href={variant.href}
 className="group block bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all hover:shadow-lg"
 >
 
 
 
 
 {variant.title}
 
 
 {variant.description}
 
 
 {variant.features.map((feature) => (
 
 
 {feature}
 
 ))}
 
 
 View Demo
 
 
 
 ))}
 
 

 {/* All Pages */}
 
 <SectionHeader
 title="All Template Pages"
 subtitle="Complete list of all pages included in this template."
 />
 
 {[
 { name: "Default Home", href: "/" },
 { name: "Personal Home", href: "/home/personal" },
 { name: "Agency Home", href: "/home/agency" },
 { name: "Freelancer Home", href: "/home/freelancer" },
 { name: "About", href: "/about" },
 { name: "Services", href: "/services" },
 { name: "Portfolio", href: "/portfolio" },
 { name: "Blog", href: "/blog" },
 { name: "Contact", href: "/contact" },
 { name: "404 Error", href: "/not-found-demo" },
 ].map((page) => (
 <Link
 key={page.name}
 href={page.href}
 className="flex items-center justify-between p-4 bg-background border border-border rounded-lg hover:border-accent/50 transition-colors"
 >
 {page.name}
 
 
 ))}
 
 

 
 
 )
}
