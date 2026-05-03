import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/section'
import api from '@/config/api'

const defaultProjects = [
  {
    _id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    _id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
  },
  {
    _id: '3',
    title: 'Portfolio Website',
    description: 'Modern portfolio website showcasing design and development work',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'Tailwind CSS'],
  },
  {
    _id: '4',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for managing multiple social media accounts',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop',
    technologies: ['React', 'Chart.js', 'Express'],
  },
]

export default function PortfolioPage() {
  const [projects, setProjects] = useState(defaultProjects)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get('/projects')
        setProjects(response.data)
      } catch (error) {
        console.log('[v0] Using default projects due to:', error.message)
        setProjects(defaultProjects)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
          <p className="mt-4 text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Section className="py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Our Work
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore some of our latest projects and see how we bring ideas to life.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl bg-muted border border-border hover:border-accent/50 transition-colors"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-accent font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all no-underline font-medium text-sm"
                >
                  View Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 text-center bg-card border border-border rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          We&apos;d love to hear about your project and discuss how we can help.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-background rounded-full hover:opacity-90 transition-opacity no-underline font-medium"
        >
          Start a Conversation
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Section>
    </div>
  )
}
