import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Users, Target, Heart, ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { StatsSection } from "@/components/stats"
import { MagneticButton } from "@/components/magnetic-button"
import { AnimatedHeading, Reveal } from "@/components/animated-text"

export const metadata = {
 title: "About - Folio",
 description: "Learn more about our story, mission, and the team behind Folio.",
}

const values = [
 {
 icon: Target,
 title: "Excellence",
 description: "We strive for excellence in everything we do, from design to development to client communication.",
 number: "01",
 },
 {
 icon: Users,
 title: "Collaboration",
 description: "We believe the best work comes from true partnership between our team and our clients.",
 number: "02",
 },
 {
 icon: Heart,
 title: "Passion",
 description: "We&apos;re genuinely passionate about creating digital experiences that make a difference.",
 number: "03",
 },
 {
 icon: Award,
 title: "Innovation",
 description: "We stay ahead of trends and continuously explore new technologies and methodologies.",
 number: "04",
 },
]

const team = [
 {
 name: "Jessica Williams",
 role: "Founder & CEO",
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

const timeline = [
 { year: "2018", title: "The Beginning", description: "Folio was founded with a mission to help businesses succeed in the digital age." },
 { year: "2020", title: "Rapid Growth", description: "Expanded our team and services, reaching 50+ clients across multiple industries." },
 { year: "2022", title: "Industry Recognition", description: "Won multiple design awards and established ourselves as industry leaders." },
 { year: "2024", title: "Global Reach", description: "Now serving clients worldwide with a team of talented professionals." },
]

export default function AboutPage() {
 return (
 
 
 
 {/* Hero */}
 
 
 
 {/* Left: Content */}
 
 
 
 About Us
 
 
 
 We create digital experiences that{" "}
 inspire
 
 
 
 Founded in 2018, Folio has grown from a small design studio to a full-service 
 digital agency. We combine creativity, strategy, and technology to help 
 businesses thrive.
 
 
 
 
 
 Work With Us
 
 
 
 

 {/* Right: Image */}
 
 
 <Image
 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
 alt="Our team at work"
 fill
 className="object-cover"
 priority
 />
 
 
 
 
 
 

 {/* Stats */}
 

 {/* Our Story with Timeline */}
 
 
 {/* Left: Story */}
 
 
 
 Our Story
 
 
 
 What startedpassion project
 
 
 
 
 Folio began with a simple belief: that great design has the power to 
 transform businesses. Our founder, Jessica Williams, started the company 
 from her home office with just a laptop and a vision.
 
 
 Today, we&apos;re a team of passionate designers, developers, and strategists 
 who share a commitment to excellence. We&apos;ve helped over 150 businesses 
 across industries create digital products that drive real results.
 
 
 
 

 {/* Right: Timeline */}
 
 {timeline.map((item, index) => (
 
 
 
 <span 
 className="text-3xl font-medium text-muted-foreground/30 group-hover:text-accent/50 transition-colors"
 style={{ fontFamily: 'var(--font-display)' }}
 >
 {item.year}
 
 {item.title}
 {item.description}
 
 
 ))}
 
 
 

 {/* Values */}
 
 
 
 
 Our Values
 
 
 
 Principles that guide us
 
 
 
 
 {values.map((value, index) => (
 
 
 
 {value.number}
 
 
 
 
 
 {value.title}
 {value.description}
 
 
 
 ))}
 
 

 {/* Team */}
 
 
 
 
 
 Our Team
 
 
 
 Meet the people
 
 
 
 
 Join Our Team
 
 
 
 
 
 {team.map((member, index) => (
 
 
 
 <Image
 src={member.image}
 alt={member.name}
 fill
 className="object-cover transition-transform duration-700 group-hover:scale-110"
 />
 
 
 {/* Social links overlay */}
 
 {["twitter", "linkedin"].map((social) => (
 <a
 key={social}
 href="#"
 className="flex h-10 w-10 items-center justify-center rounded-full bg-background/90 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
 >
 
 
 ))}
 
 
 {member.name}
 {member.role}
 
 
 ))}
 
 

 {/* CTA */}
 
 
 
 
 
 
 
 
 
 Ready to work{" "}
 together?
 
 
 
 We&apos;re always looking for talented people and exciting projects.
 
 
 
 
 <Link
 href="/contact"
 className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-medium text-foreground bg-background rounded-full transition-all duration-300 hover:shadow-2xl"
 >
 Start a Project
 
 
 <Link
 href="/services"
 className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-background/80 hover:text-background transition-colors"
 >
 View Services
 
 
 
 
 

 
 
 )
}
