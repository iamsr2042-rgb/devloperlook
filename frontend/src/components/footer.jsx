import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight, Mail } from 'lucide-react'

const navigation = {
 main: [
 { name: 'About', href: '/about' },
 { name: 'Services', href: '/services' },
 { name: 'Portfolio', href: '/portfolio' },
 { name: 'Blog', href: '/blog' },
 { name: 'Contact', href: '/contact' },
 ],
 social: [
 { name: 'Twitter', href: '#', icon: Twitter },
 { name: 'GitHub', href: '#', icon: Github },
 { name: 'LinkedIn', href: '#', icon: Linkedin },
 { name: 'Instagram', href: '#', icon: Instagram },
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
 
 
 
 <a
 href="mailto:hello@folio.design"
 className="group inline-flex items-center gap-3 mt-8 text-lg font-medium text-foreground hover:text-accent transition-colors"
 >
 <Mail className="w-5 h-5" />
 hello@folio.design
 </a>
 
 
 hello@folio.design
 
 
 

 {/* Right: Navigation & Info */}
 
 {/* Navigation */}
 
 
 Navigation
 
 
 {navigation.main.map((item) => (
 <Link
 key={item.name}
 to={item.href}
 className="group flex items-center gap-2 text-foreground hover:text-accent transition-colors no-underline"
 >
 {item.name}
 </Link>
 ))}
 

 {/* Social & Info */}
 <div>
 <h4 className="text-sm font-medium text-muted-foreground mb-4">Follow</h4>
 <div className="flex gap-4">
 {navigation.social.map((item) => {
 const IconComponent = item.icon
 return (
 <a
 key={item.name}
 href={item.href}
 target="_blank"
 rel="noopener noreferrer"
 className="group flex items-center gap-3 text-foreground hover:text-accent transition-colors"
 >
 <IconComponent className="w-5 h-5" />
 </a>
 )
 })}
 </div>
 </div>
 
 

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
