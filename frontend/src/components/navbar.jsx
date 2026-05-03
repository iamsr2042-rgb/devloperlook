"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
 { name: "Home", href: "/" },
 { name: "About", href: "/about" },
 { name: "Services", href: "/services" },
 { name: "Portfolio", href: "/portfolio" },
 { name: "Blog", href: "/blog" },
 { name: "Contact", href: "/contact" },
]

interface NavbarProps {
 variant?: "default" | "transparent"
}

export function Navbar({ variant = "default" }: NavbarProps) {
 const pathname = usePathname()
 const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
 const [scrolled, setScrolled] = React.useState(false)
 const [hidden, setHidden] = React.useState(false)
 const lastScrollY = React.useRef(0)

 React.useEffect(() => {
 const handleScroll = () => {
 const currentScrollY = window.scrollY
 
 // Determine if scrolled past threshold
 setScrolled(currentScrollY > 50)
 
 // Hide/show on scroll direction
 if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
 setHidden(true)
 } else {
 setHidden(false)
 }
 
 lastScrollY.current = currentScrollY
 }
 
 window.addEventListener("scroll", handleScroll, { passive: true })
 return () => window.removeEventListener("scroll", handleScroll)
 }, [])

 return (
 
 <motion.header
 initial={{ y: 0 }}
 animate={{ y: hidden && !mobileMenuOpen ? -100 : 0 }}
 transition={{ duration: 0.3, ease: "easeInOut" }}
 className={cn(
 "fixed top-0 left-0 right-0 z-50",
 scrolled || variant === "default"
 ? "glass py-3"
 : "bg-transparent py-5"
 )}
 >
 
 {/* Logo */}
 
 <span 
 className="text-2xl font-semibold tracking-tight transition-opacity duration-300 group-hover:opacity-70"
 style={{ fontFamily: 'var(--font-display)' }}
 >
 Folio.
 
 

 {/* Desktop Navigation */}
 
 {navigation.map((item) => (
 <Link
 key={item.name}
 href={item.href}
 className={cn(
 "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
 pathname === item.href
 ? "text-foreground"
 : "text-muted-foreground hover:text-foreground"
 )}
 >
 {item.name}
 {/* Active indicator */}
 <span
 className={cn(
 "absolute bottom-1 left-4 right-4 h-[2px] bg-foreground rounded-full transition-transform duration-300 origin-left",
 pathname === item.href ? "scale-x-100" : "scale-x-0"
 )}
 />
 
 ))}
 

 {/* Desktop Actions */}
 
 
 <Link
 href="/contact"
 className="group relative inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-background bg-foreground rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg"
 >
 Get in Touch
 
 
 

 {/* Mobile menu button */}
 
 
 <button
 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
 className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-muted/50 transition-colors hover:bg-muted"
 >
 Toggle menu
 
 <span
 className={cn(
 "absolute left-0 top-0 h-0.5 w-5 bg-foreground transition-all duration-300",
 mobileMenuOpen && "top-1/2 -translate-y-1/2 rotate-45"
 )}
 />
 <span
 className={cn(
 "absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-foreground transition-all duration-300",
 mobileMenuOpen && "opacity-0"
 )}
 />
 <span
 className={cn(
 "absolute left-0 bottom-0 h-0.5 w-5 bg-foreground transition-all duration-300",
 mobileMenuOpen && "bottom-1/2 translate-y-1/2 -rotate-45"
 )}
 />
 
 
 
 
 

 {/* Mobile Navigation Overlay */}
 <div
 className={cn(
 "fixed inset-0 z-40 lg:hidden transition-all duration-500",
 mobileMenuOpen ? "visible" : "invisible"
 )}
 >
 {/* Backdrop */}
 <div
 className={cn(
 "absolute inset-0 bg-background/95 backdrop-blur-xl transition-opacity duration-500",
 mobileMenuOpen ? "opacity-100" : "opacity-0"
 )}
 onClick={() => setMobileMenuOpen(false)}
 />
 
 {/* Menu Content */}
 
 
 {navigation.map((item, index) => (
 <div
 key={item.name}
 className={cn(
 "overflow-hidden transition-all duration-500",
 mobileMenuOpen ? "opacity-100" : "opacity-0"
 )}
 style={{
 transitionDelay: mobileMenuOpen ? `${index * 0.05 + 0.1}s` : "0s"
 }}
 >
 <Link
 href={item.href}
 onClick={() => setMobileMenuOpen(false)}
 className={cn(
 "block py-3 text-4xl font-medium transition-all duration-300",
 pathname === item.href
 ? "text-foreground"
 : "text-muted-foreground hover:text-foreground hover:translate-x-2"
 )}
 style={{ fontFamily: 'var(--font-display)' }}
 >
 {item.name}
 
 
 ))}
 

 {/* Mobile CTA */}
 <div
 className={cn(
 "mt-12 transition-all duration-500",
 mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
 )}
 style={{ transitionDelay: mobileMenuOpen ? "0.4s" : "0s" }}
 >
 <Link
 href="/contact"
 onClick={() => setMobileMenuOpen(false)}
 className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-background bg-foreground rounded-full"
 >
 Start a Project
 
 

 {/* Social Links */}
 <div
 className={cn(
 "absolute bottom-12 left-8 right-8 flex items-center justify-between text-sm text-muted-foreground transition-all duration-500",
 mobileMenuOpen ? "opacity-100" : "opacity-0"
 )}
 style={{ transitionDelay: mobileMenuOpen ? "0.5s" : "0s" }}
 >
 &copy; {new Date().getFullYear()} Folio
 
 Twitter
 LinkedIn
 Instagram
 
 
 
 
 
 )
}
