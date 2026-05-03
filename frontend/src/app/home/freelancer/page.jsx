import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Sparkles, Clock, Target, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"

const services = [
 {
 icon: Sparkles,
 title: "Web Design",
 price: "From $2,000",
 description: "Custom website designs that capture your brand essence and convert visitors.",
 features: ["Responsive Design", "UI/UX Design", "Figma Prototype", "Design System"],
 },
 {
 icon: Target,
 title: "Development",
 price: "From $3,500",
 description: "Fast, accessible, and SEO-friendly websites built with modern technologies.",
 features: ["Next.js / React", "CMS Integration", "Performance Optimization", "Deployment"],
 },
 {
 icon: MessageSquare,
 title: "Consulting",
 price: "$150/hour",
 description: "Strategic guidance on design systems, tech stacks, and product development.",
 features: ["Code Review", "Architecture Planning", "Team Training", "Best Practices"],
 },
]

const process = [
 {
 step: "01",
 title: "Discovery",
 description: "We start with a deep dive into your business, goals, and target audience to understand what you need.",
 },
 {
 step: "02",
 title: "Design",
 description: "I create wireframes and visual designs, refining them based on your feedback until we nail it.",
 },
 {
 step: "03",
 title: "Development",
 description: "Using modern tech, I build your project with clean code and attention to performance.",
 },
 {
 step: "04",
 title: "Launch",
 description: "After thorough testing, we launch and I provide support to ensure everything runs smoothly.",
 },
]

const projects = [
 {
 title: "SaaS Dashboard",
 category: "Web App",
 image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
 },
 {
 title: "Portfolio Website",
 category: "Design",
 image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
 },
 {
 title: "E-learning Platform",
 category: "Development",
 image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
 },
]

export default function FreelancerHomePage() {
 return (
 
 
 
 {/* Hero Section */}
 
 
 
 
 
 
 Available for projects
 
 <h1 
 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
 style={{ fontFamily: 'var(--font-display)' }}
 >
 Hi, I&apos;m Jordan. I design & build digital products.
 
 
 A freelance designer and developer with 7+ years of experience helping startups 
 and businesses bring their ideas to life through thoughtful design and solid code.
 
 
 
 
 Hire Me
 
 
 
 
 See My Work
 
 
 
 
 
 
 <Image
 src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face"
 alt="Jordan"
 width={320}
 height={320}
 className="relative rounded-full object-cover border-4 border-background shadow-2xl"
 priority
 />
 
 
 
 
 

 {/* Services */}
 
 <SectionHeader
 title="Services & Pricing"
 subtitle="Transparent pricing for quality work. Every project includes unlimited revisions and dedicated support."
 />
 
 {services.map((service) => (
 <div
 key={service.title}
 className="bg-background rounded-xl p-6 border border-border hover:border-accent/50 transition-colors"
 >
 
 
 
 
 {service.price}
 
 {service.title}
 {service.description}
 
 {service.features.map((feature) => (
 
 
 {feature}
 
 ))}
 
 
 ))}
 
 

 {/* Process */}
 
 <SectionHeader
 title="How I Work"
 subtitle="A proven process that delivers results on time and within budget."
 />
 
 {process.map((step, index) => (
 
 {index < process.length - 1 && (
 
 )}
 <span 
 className="text-5xl font-bold text-muted-foreground/20"
 style={{ fontFamily: 'var(--font-display)' }}
 >
 {step.step}
 
 {step.title}
 {step.description}
 
 ))}
 
 

 {/* Recent Work */}
 
 <SectionHeader
 title="Recent Projects"
 subtitle="A selection of recent work from my portfolio."
 />
 
 {projects.map((project) => (
 <Link
 key={project.title}
 href="/portfolio"
 className="group relative aspect-[4/3] overflow-hidden rounded-xl"
 >
 <Image
 src={project.image}
 alt={project.title}
 fill
 className="object-cover transition-transform duration-500 group-hover:scale-105"
 />
 
 
 {project.title}
 {project.category}
 
 
 
 ))}
 
 
 
 
 View All Projects
 
 
 
 
 

 {/* Testimonial */}
 
 
 
 
 
 
 
 &quot;Jordan transformed our outdated website into a modern, high-converting platform. 
 The attention to detail and communication throughout was exceptional.&quot;
 
 
 
 <Image
 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
 alt="Client"
 width={48}
 height={48}
 className="rounded-full"
 />
 
 Michael Chen
 CEO, StartupXYZ
 
 
 
 

 {/* FAQ Preview */}
 
 <SectionHeader
 title="Common Questions"
 subtitle="Quick answers to questions I get asked frequently."
 />
 
 {[
 {
 q: "What's your typical turnaround time?",
 a: "Most projects take 4-8 weeks depending on scope. I'll provide a detailed timeline during our initial consultation.",
 },
 {
 q: "Do you work with clients remotely?",
 a: "Absolutely! I work with clients worldwide. We'll stay connected through regular video calls and async updates.",
 },
 {
 q: "What's included in your pricing?",
 a: "All packages include unlimited revisions during the design phase, responsive development, and 30 days of post-launch support.",
 },
 ].map((faq, index) => (
 
 {faq.q}
 {faq.a}
 
 ))}
 
 

 {/* CTA */}
 
 
 <h2 
 className="text-3xl font-bold tracking-tight sm:text-4xl"
 style={{ fontFamily: 'var(--font-display)' }}
 >
 Let&apos;s build something great together
 
 
 Have a project in mind? I&apos;d love to hear about it. Let&apos;s chat and see how I can help.
 
 
 
 
 Start a Project
 
 
 
 
 hello@example.com
 
 
 
 

 
 
 )
}
