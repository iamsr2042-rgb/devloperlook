import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { Section } from '@/components/section'
import api from '@/config/api'

const defaultPosts = [
  {
    _id: '1',
    title: 'Getting Started with React Hooks',
    excerpt: 'Learn how to use React Hooks to manage state and side effects in functional components.',
    author: 'John Developer',
    createdAt: new Date('2024-03-10'),
    category: 'React',
    slug: 'react-hooks-guide',
    readTime: 5
  },
  {
    _id: '2',
    title: 'MongoDB Best Practices',
    excerpt: 'Essential tips and tricks for optimizing your MongoDB databases.',
    author: 'Jane Backend',
    createdAt: new Date('2024-03-05'),
    category: 'Database',
    slug: 'mongodb-best-practices',
    readTime: 8
  },
  {
    _id: '3',
    title: 'CSS Grid vs Flexbox',
    excerpt: 'Understand the differences and when to use CSS Grid or Flexbox.',
    author: 'Alex Designer',
    createdAt: new Date('2024-02-28'),
    category: 'CSS',
    slug: 'css-grid-vs-flexbox',
    readTime: 6
  },
  {
    _id: '4',
    title: 'Web Performance Optimization',
    excerpt: 'Tips to improve your website performance and user experience.',
    author: 'Chris Performance',
    createdAt: new Date('2024-02-20'),
    category: 'Performance',
    slug: 'web-performance',
    readTime: 10
  },
]

export default function BlogPage() {
  const [posts, setPosts] = useState(defaultPosts)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/blog')
        setPosts(response.data)
      } catch (error) {
        console.log('[v0] Using default posts due to:', error.message)
        setPosts(defaultPosts)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
          <p className="mt-4 text-muted-foreground">Loading blog posts...</p>
        </div>
      </div>
    )
  }
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
