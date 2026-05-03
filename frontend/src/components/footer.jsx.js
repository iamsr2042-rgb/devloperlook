"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight, Mail } from "lucide-react"
import { Reveal } from "@/components/animated-text"

const navigation = {
 main: [
 { name: "About", href: "/about" },
 { name: "Services", href: "/services" },
 { name: "Portfolio", href: "/portfolio" },
 { name: "Blog", href: "/blog" },
 { name: "Contact", href: "/contact" },
 ],
 social: [
 { name: "Twitter", href: "#", icon: Twitter },
 { name: "GitHub", href: "#", icon: Github },
 { name: "LinkedIn", href: "#", icon: Linkedin },
 { name: "Instagram", href: "#", icon: Instagram },
 ],
}

export function Footer() {
 return (
 
 
 {/* Main Footer Content */}
 
 
 {/* Left: CTA */}
 
 
 
 Get in touch
 
 
 
 <h2 
 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-medium leading-tight"
 style={{ fontFamily: 'var(--font-display)' }}
 >
 Let&apos;s create something{" "}
 amazing{" "}
 together
 
 
 
 <Link
 href="mailto:hello@folio.design"
 className="group inline-flex items-center gap-3 mt-8 text-lg font-medium text-foreground hover:text-accent transition-colors"
 >
 
 
 
 hello@folio.design
 
 
 

 {/* Right: Navigation & Info */}
 
 {/* Navigation */}
 
 
 Navigation
 
 
 {navigation.main.map((item) => (
 <Link
 key={item.name}
 href={item.href}
 className="group flex items-center gap-2 text-foreground hover:text-accent transition-colors"
 >
 {item.name}
 
 
 ))}
 
 

 {/* Social & Info */}
 
 
 Follow
 
 
 {navigation.social.map((item) => (
 <Link
 key={item.name}
 href={item.href}
 className="group flex items-center gap-3 text-foreground hover:text-accent transition-colors"
 >
 
 {item.name}
 
 ))}
 
 
 
 
 

 {/* Bottom Bar */}
 
 {/* Logo */}
 
 <span 
 className="text-xl font-semibold tracking-tight transition-opacity group-hover:opacity-70"
 style={{ fontFamily: 'var(--font-display)' }}
 >
 Folio.
 
 

 {/* Copyright */}
 
 &copy; {new Date().getFullYear()} Folio. All rights reserved.
 

 {/* Back to top */}
 <button
 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
 className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
 >
 Back to top
 
 
 
 
 
 
 
 )
}
