import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Github, Linkedin, Twitter, Mail, MapPin, Download } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { PortfolioFilter } from "@/components/portfolio-filter"
import { MagneticButton } from "@/components/magnetic-button"
import { AnimatedHeading, Reveal } from "@/components/animated-text"

const skills = [
 { name: "React", level: 95 },
 { name: "Next.js", level: 90 },
 { name: "TypeScript", level: 88 },
 { name: "Node.js", level: 82 },
 { name: "Figma", level: 75 },
 { name: "Tailwind CSS", level: 92 },
]

const experience = [
 {
 period: "2024 - Present",
 role: "Senior Frontend Engineer",
 company: "TechCorp",
 description: "Leading the frontend architecture and mentoring junior developers.",
 },
 {
 period: "2021 - 2024",
 role: "Full Stack Developer",
 company: "StartupXYZ",
 description: "Built and maintained multiple web applications using modern technologies.",
 },
 {
 period: "2019 - 2021",
 role: "Junior Developer",
 company: "Digital Agency",
 description: "Developed responsive websites and collaborated with design teams.",
 },
]

const socialLinks = [
 { name: "GitHub", icon: Github, href: "#" },
 { name: "LinkedIn", icon: Linkedin, href: "#" },
 { name: "Twitter", icon: Twitter, href: "#" },
]

export default function PersonalHomePage() {
 return (
 
 
 
 {/* Hero Section - Modern Split Layout */}
 
 
 
 {/* Left Content */}
 
 
 
 
 
 
 
 Available for work
 
 
 
 
 Alex Morgan
 
 
 
 
 Frontend Engineer
 
 
 
 
 
 I build accessible, pixel-perfect digital experiences for the web. 
 Currently focused on creating high-performance applications at TechCorp.
 
 

 {/* Location */}
 
 
 
 San Francisco, CA
 
 

 {/* CTA Buttons */}
 
 
 
 View Projects
 
 
 Contact Me
 
 
 

 {/* Social Links */}
 
 
 {socialLinks.map((social) => (
 <Link
 key={social.name}
 href={social.href}
 className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
 >
 
 
 ))}
 
 
 

 {/* Right Image */}
 
 
 
 {/* Main Image */}
 
 <Image
 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
 alt="Alex Morgan"
 fill
 className="object-cover"
 priority
 />
 
 
 {/* Floating Card - Experience */}
 
 5+
 Years Exp.
 
 
 {/* Floating Card - Projects */}
 
 50+
 Projects
 
 
 
 
 
 

 {/* Scroll indicator */}
 
 
 Scroll
 
 
 
 
 
 

 {/* About Section */}
 
 
 {/* Left: About */}
 
 
 
 About Me
 
 
 
 Crafting digital experiences
 
 
 
 
 With over 5 years of experience in web development, I specialize in building 
 modern web applications using React, Next.js, and TypeScript.
 
 
 I believe in writing clean, maintainable code and creating experiences that 
 are both functional and delightful to use.
 
 
 
 
 
 <Link
 href="#"
 className="group inline-flex items-center gap-2 text-foreground font-medium"
 >
 
 Download Resume
 
 
 
 
 

 {/* Right: Skills */}
 
 
 Skills & Expertise
 
 
 {skills.map((skill, index) => (
 
 
 
 {skill.name}
 {skill.level}%
 
 
 <div 
 className="h-full bg-foreground rounded-full transition-all duration-1000"
 style={{ width: `${skill.level}%` }}
 />
 
 
 
 ))}
 
 
 
 

 {/* Experience Section */}
 
 
 
 
 
 Experience
 
 
 
 Career journey
 
 
 
 
 
 {experience.map((exp, index) => (
 
 
 
 {exp.period}
 
 
 
 {exp.role}
 
 {exp.company}
 {exp.description}
 
 
 
 ))}
 
 

 {/* Projects Section */}
 
 
 
 
 
 Projects
 
 
 
 Featured work
 
 
 
 
 View All
 
 
 
 
 

 {/* Contact CTA */}
 
 
 
 
 
 
 
 
 Let&apos;s work{" "}
 together
 
 
 
 I&apos;m always open to discussing new projects and opportunities.
 
 
 
 
 <Link
 href="/contact"
 className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-medium text-foreground bg-background rounded-full transition-all duration-300 hover:shadow-2xl"
 >
 Get in Touch
 
 
 
 
 
 

 
 
 )
}
