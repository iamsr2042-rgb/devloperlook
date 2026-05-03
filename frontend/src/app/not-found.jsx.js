import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const pages = [
 { name: "Homepage", description: "Go back to our main page", href: "/" },
 { name: "About", description: "Learn more about us", href: "/about" },
 { name: "Services", description: "Explore what we offer", href: "/services" },
 { name: "Portfolio", description: "View our work", href: "/portfolio" },
 { name: "Blog", description: "Read our articles", href: "/blog" },
 { name: "Contact", description: "Get in touch", href: "/contact" },
]

export default function NotFound() {
 return (
 
 
 
 
 
 
 {/* Left: Message */}
 
 {/* 404 Number */}
 <span 
 className="text-[120px] sm:text-[160px] font-medium leading-none text-foreground/5"
 style={{ fontFamily: 'var(--font-display)' }}
 >
 404
 

 <h1 
 className="text-4xl md:text-5xl font-medium tracking-tight -mt-8"
 style={{ fontFamily: 'var(--font-display)' }}
 >
 Page not{" "}
 found
 
 
 
 Sorry, we couldn&apos;t find the page you&apos;re looking for. 
 Perhaps you&apos;ve mistyped the URL or the page has been moved.
 

 
 <Link
 href="/"
 className="group inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-full font-medium transition-all duration-300 hover:bg-foreground/90"
 >
 Back to Homepage
 
 
 
 

 {/* Right: Quick Links */}
 
 
 Quick Links
 
 {pages.map((page) => (
 <Link
 key={page.name}
 href={page.href}
 className="group flex items-center justify-between p-4 rounded-xl border border-border hover:border-foreground/20 hover:bg-muted/50 transition-all duration-300"
 >
 
 
 {page.name}
 
 
 {page.description}
 
 
 
 
 
 
 ))}
 
 
 
 

 
 
 )
}
