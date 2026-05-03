import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"

export const metadata = {
 title: "Blog - Folio",
 description: "Insights, tutorials, and thoughts on design, development, and digital strategy.",
}

const featuredPost = {
 id: 1,
 title: "The Future of Web Design: Trends to Watch in 2026",
 excerpt: "Exploring the emerging design patterns, technologies, and methodologies that are shaping the future of digital experiences. From AI-assisted design to immersive 3D interfaces.",
 image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=600&fit=crop",
 date: "Mar 15, 2026",
 category: "Design",
 author: {
 name: "Jessica Williams",
 avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
 },
 href: "/blog/future-of-web-design",
}

const posts = [
 {
 id: 2,
 title: "Building Accessible Web Applications",
 excerpt: "A comprehensive guide to creating inclusive digital products that work for everyone.",
 image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=500&fit=crop",
 date: "Mar 10, 2026",
 category: "Development",
 href: "/blog/accessible-web-applications",
 },
 {
 id: 3,
 title: "The Art of Minimalist Design",
 excerpt: "How simplicity and restraint can lead to more impactful and memorable user experiences.",
 image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop",
 date: "Mar 5, 2026",
 category: "Design",
 href: "/blog/minimalist-design",
 },
 {
 id: 4,
 title: "Mastering CSS Grid Layout",
 excerpt: "Deep dive into CSS Grid and how to use it for complex, responsive layouts.",
 image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=800&h=500&fit=crop",
 date: "Feb 28, 2026",
 category: "Development",
 href: "/blog/css-grid-layout",
 },
 {
 id: 5,
 title: "Brand Strategy for Startups",
 excerpt: "Essential branding principles every startup founder should know.",
 image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&h=500&fit=crop",
 date: "Feb 20, 2026",
 category: "Branding",
 href: "/blog/brand-strategy-startups",
 },
 {
 id: 6,
 title: "Performance Optimization Tips",
 excerpt: "Practical techniques to make your website faster and improve user experience.",
 image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
 date: "Feb 15, 2026",
 category: "Development",
 href: "/blog/performance-optimization",
 },
 {
 id: 7,
 title: "Color Theory in UI Design",
 excerpt: "Understanding color psychology and how to use it effectively in your designs.",
 image: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=800&h=500&fit=crop",
 date: "Feb 10, 2026",
 category: "Design",
 href: "/blog/color-theory-ui",
 },
]

const categories = ["All", "Design", "Development", "Branding", "Strategy"]

export default function BlogPage() {
 return (
 
 
 
 {/* Hero */}
 
 
 
 
 Blog
 
 <h1 
 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
 style={{ fontFamily: 'var(--font-display)' }}
 >
 Insights & Ideas
 
 
 Thoughts, tutorials, and reflections on design, development, and 
 creating meaningful digital experiences.
 
 
 
 

 {/* Categories */}
 
 
 
 {categories.map((category) => (
 <Button
 key={category}
 variant={category === "All" ? "default" : "outline"}
 size="sm"
 >
 {category}
 
 ))}
 
 
 

 {/* Featured Post */}
 
 
 
 
 <Image
 src={featuredPost.image}
 alt={featuredPost.title}
 fill
 className="object-cover transition-transform duration-500 group-hover:scale-105"
 />
 
 
 
 {featuredPost.category}
 &middot;
 {featuredPost.date}
 
 <h2 
 className="text-2xl md:text-3xl lg:text-4xl font-bold group-hover:text-accent transition-colors"
 style={{ fontFamily: 'var(--font-display)' }}
 >
 {featuredPost.title}
 
 
 {featuredPost.excerpt}
 
 
 <Image
 src={featuredPost.author.avatar}
 alt={featuredPost.author.name}
 width={40}
 height={40}
 className="rounded-full"
 />
 {featuredPost.author.name}
 
 
 
 
 

 {/* All Posts */}
 
 <SectionHeader
 title="Latest Articles"
 subtitle="Stay updated with our newest posts and insights."
 />
 
 {posts.map((post) => (
 
 
 
 <Image
 src={post.image}
 alt={post.title}
 fill
 className="object-cover transition-transform duration-500 group-hover:scale-105"
 />
 
 
 
 {post.category}
 &middot;
 {post.date}
 
 
 {post.title}
 
 
 {post.excerpt}
 
 
 
 
 ))}
 
 
 
 Load More Articles
 
 
 

 {/* Newsletter */}
 
 
 <h2 
 className="text-2xl font-bold tracking-tight sm:text-3xl"
 style={{ fontFamily: 'var(--font-display)' }}
 >
 Subscribe to our newsletter
 
 
 Get the latest articles, tutorials, and insights delivered directly to your inbox.
 
 
 <input
 type="email"
 placeholder="Enter your email"
 className="flex h-11 w-full sm:w-80 rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
 />
 
 Subscribe
 
 
 
 
 No spam, ever. Unsubscribe at any time.
 
 
 

 
 
 )
}
