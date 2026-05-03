import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/section'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Design',
    description: 'A modern e-commerce platform with advanced filtering and checkout.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db5b?w=600&h=400&fit=crop',
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile Design',
    description: 'User-friendly banking application with secure transactions.',
    image: 'https://images.unsplash.com/photo-1512941691920-25bda36d6581?w=600&h=400&fit=crop',
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web Design',
    description: 'Comprehensive analytics dashboard for business intelligence.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    title: 'Fitness App',
    category: 'Mobile Design',
    description: 'Personalized fitness tracking and workout planning application.',
    image: 'https://images.unsplash.com/photo-1522869635100-7f68c5d6ee7d?w=600&h=400&fit=crop',
  },
]

export default function PortfolioPage() {
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
