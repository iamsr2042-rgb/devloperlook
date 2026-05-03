import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, User, Building2, Briefcase } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Section, SectionHeader } from '@/components/section'

const variants = [
  {
    icon: User,
    title: 'Personal',
    description: 'Perfect for individual professionals, developers, and designers showcasing their personal brand and portfolio.',
    href: '/home/personal',
    features: ['Split hero layout', 'Skills showcase', 'Timeline experience', 'Social links'],
  },
  {
    icon: Building2,
    title: 'Agency',
    description: 'Designed for digital agencies and studios looking to highlight their team, services, and client work.',
    href: '/home/agency',
    features: ['Client logos', 'Team showcase', 'Featured work grid', 'Process section'],
  },
  {
    icon: Briefcase,
    title: 'Freelancer',
    description: 'Ideal for freelancers and consultants with transparent pricing and a focus on services and testimonials.',
    href: '/home/freelancer',
    features: ['Pricing cards', 'Process steps', 'FAQ section', 'Availability badge'],
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <Section className="py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Choose your style
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            This template includes three distinct homepage layouts, each designed for different use cases. Explore them below.
          </p>
        </div>
      </Section>

      {/* Variants Grid */}
      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {variants.map((variant) => {
            const IconComponent = variant.icon
            return (
              <Link
                key={variant.title}
                to={variant.href}
                className="group block bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all hover:shadow-lg no-underline"
              >
                <div className="flex items-start justify-between mb-4">
                  <IconComponent className="w-6 h-6 text-accent" />
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{variant.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{variant.description}</p>
                <div className="space-y-2">
                  {variant.features.map((feature) => (
                    <div key={feature} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </Link>
            )
          })}
        </div>
      </Section>

      {/* All Pages */}
      <Section>
        <SectionHeader
          title="All Template Pages"
          subtitle="Complete list of all pages included in this template."
        />
        <div className="space-y-3">
          {[
            { name: 'Default Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Services', href: '/services' },
            { name: 'Portfolio', href: '/portfolio' },
            { name: 'Blog', href: '/blog' },
            { name: 'Contact', href: '/contact' },
          ].map((page) => (
            <Link
              key={page.name}
              to={page.href}
              className="flex items-center justify-between p-4 bg-background border border-border rounded-lg hover:border-accent/50 transition-colors no-underline text-foreground"
            >
              <span>{page.name}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ))}
        </div>
      </Section>
    </div>
  )
}
