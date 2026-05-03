import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { Section } from '@/components/section'

const posts = [
  {
    title: 'The Future of Web Design',
    excerpt: 'Exploring emerging trends and technologies shaping modern web design.',
    author: 'Jessica Williams',
    date: 'March 15, 2024',
    category: 'Design',
    slug: 'future-of-web-design',
  },
  {
    title: 'Building Scalable Applications',
    excerpt: 'Best practices for developing applications that grow with your business.',
    author: 'David Kim',
    date: 'March 10, 2024',
    category: 'Development',
    slug: 'building-scalable-apps',
  },
  {
    title: 'User Experience in 2024',
    excerpt: 'How to create interfaces that users genuinely love and want to use.',
    author: 'Sarah Chen',
    date: 'March 5, 2024',
    category: 'UX',
    slug: 'ux-2024',
  },
  {
    title: 'Mobile-First Design Strategy',
    excerpt: 'Why mobile-first should be your default approach in modern design.',
    author: 'Marcus Johnson',
    date: 'February 28, 2024',
    category: 'Strategy',
    slug: 'mobile-first-strategy',
  },
]

export default function BlogPage() {
  return (
    <div>
      <Section className="py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            Insights, tips, and stories from our team of experts.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <span className="px-2 py-1 bg-accent/10 text-accent rounded-full">{post.category}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
              </div>
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all no-underline font-medium text-sm"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section className="py-20 text-center bg-card border border-border rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Get the latest articles and insights delivered to your inbox.
        </p>
        <form className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-accent text-background rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            Subscribe
          </button>
        </form>
      </Section>
    </div>
  )
}
