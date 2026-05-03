import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"
import { TestimonialsSection } from "@/components/testimonials"

const services = [
 {
 number: "01",
 title: "Brand Strategy",
 description: "We develop comprehensive brand strategies that position your business for long-term success in competitive markets.",
 },
 {
 number: "02",
 title: "Digital Design",
 description: "Our design team creates stunning visual identities and user interfaces that captivate and convert.",
 },
 {
 number: "03",
 title: "Web Development",
 description: "We build fast, secure, and scalable web applications using cutting-edge technologies.",
 },
 {
 number: "04",
 title: "Digital Marketing",
 description: "Data-driven marketing strategies that increase visibility and drive measurable results.",
 },
]

const clients = [
 "TechCorp", "Innovate Inc", "StartupXYZ", "Design Co", "Future Labs", "Digital First"
]

const teamMembers = [
 {
 name: "Jessica Williams",
 role: "CEO & Founder",
 image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
 },
 {
 name: "David Kim",
 role: "Creative Director",
 image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
 },
 {
 name: "Sarah Chen",
 role: "Lead Developer",
 image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
 },
 {
 name: "Marcus Johnson",
 role: "Strategy Lead",
 image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
 },
]

const featuredWork = [
 {
 title: "TechCorp Rebrand",
 category: "Branding",
 image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=800&fit=crop",
 },
 {
 title: "E-Commerce Platform",
 category: "Development",
 image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
 },
 {
 title: "Mobile Banking App",
 category: "UI/UX",
 image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
 },
]

export default function AgencyHomePage() {
 return (
 
 
 
 {/* Hero Section */}
 
 
 
 
 Digital Agency
 
 <h1 
 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
 style={{ fontFamily: 'var(--font-display)' }}
 >
 We craft digital experiences that matter
 
 
 A full-service digital agency helping brands thrive in the digital age. 
 We combine strategy, design, and technology to create impactful solutions.
 
 
 
 
 Our Work
 
 
 
 
 Start a Project
 
 
 
 
 

 {/* Clients */}
 
 
 Trusted by leading companies
 
 {clients.map((client) => (
 <span 
 key={client} 
 className="text-lg font-semibold text-muted-foreground/60"
 style={{ fontFamily: 'var(--font-display)' }}
 >
 {client}
 
 ))}
 
 
 

 {/* Services */}
 
 
 
 <SectionHeader 
 title="What We Do" 
 subtitle="We offer end-to-end digital solutions that help businesses grow and succeed."
 align="left"
 />
 
 
 
 All Services
 
 
 
 
 
 
 {services.map((service) => (
 
 
 {service.number}
 
 
 
 {service.title}
 
 
 {service.description}
 
 
 
 ))}
 
 
 

 {/* Featured Work */}
 
 <SectionHeader
 title="Featured Work"
 subtitle="A showcase of our recent projects and collaborations."
 />
 
 
 <Image
 src={featuredWork[0].image}
 alt={featuredWork[0].title}
 fill
 className="object-cover transition-transform duration-500 group-hover:scale-105"
 />
 
 
 {featuredWork[0].category}
 {featuredWork[0].title}
 
 
 
 {featuredWork.slice(1).map((work, index) => (
 
 <Image
 src={work.image}
 alt={work.title}
 fill
 className="object-cover transition-transform duration-500 group-hover:scale-105"
 />
 
 
 {work.category}
 {work.title}
 
 
 
 ))}
 
 
 
 
 View All Work
 
 
 
 
 

 {/* Why Choose Us */}
 
 
 
 <SectionHeader 
 title="Why Choose Us" 
 subtitle="We bring together expertise, creativity, and dedication to deliver exceptional results."
 align="left"
 />
 
 {[
 "Award-winning design team",
 "Agile development methodology",
 "Transparent communication",
 "Dedicated project managers",
 "Post-launch support",
 ].map((item) => (
 
 
 {item}
 
 ))}
 
 
 
 {teamMembers.map((member) => (
 
 
 <Image
 src={member.image}
 alt={member.name}
 fill
 className="object-cover transition-transform duration-500 group-hover:scale-105"
 />
 
 {member.name}
 {member.role}
 
 ))}
 
 
 

 {/* Testimonials */}
 

 {/* CTA */}
 
 
 
 <h2 
 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
 style={{ fontFamily: 'var(--font-display)' }}
 >
 Ready to transform your digital presence?
 
 
 Let&apos;s discuss your project and explore how we can help you achieve your goals.
 
 
 
 
 
 Start Your Project
 
 
 
 
 
 

 
 
 )
}
