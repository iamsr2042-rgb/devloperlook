import React from 'react'
import { Link } from 'react-router-dom'
import { Award, Users, Target, Heart, ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/section'

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from design to development to client communication.',
    number: '01',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe the best work comes from true partnership between our team and our clients.',
    number: '02',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We&apos;re genuinely passionate about creating digital experiences that make a difference.',
    number: '03',
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'We stay ahead of trends and continuously explore new technologies and methodologies.',
    number: '04',
  },
]

const team = [
  {
    name: 'Jessica Williams',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'David Kim',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Marcus Johnson',
    role: 'Strategy Lead',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
]

const timeline = [
  { year: '2018', title: 'The Beginning', description: 'Folio was founded with a mission to help businesses succeed in the digital age.' },
  { year: '2020', title: 'Rapid Growth', description: 'Expanded our team and services, reaching 50+ clients across multiple industries.' },
  { year: '2022', title: 'Industry Recognition', description: 'Won multiple design awards and established ourselves as industry leaders.' },
  { year: '2024', title: 'Global Reach', description: 'Now serving clients worldwide with a team of talented professionals.' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <Section className="py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              About Us
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We create digital experiences that inspire. Founded in 2018, Folio has grown from a small design studio to a full-service digital agency. We combine creativity, strategy, and technology to help businesses thrive.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-full hover:opacity-90 transition-opacity no-underline font-medium"
            >
              Work With Us
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
              alt="Our team at work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-muted-foreground">Principles that guide us</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value) => {
            const IconComponent = value.icon
            return (
              <div key={value.title} className="p-6 bg-card border border-border rounded-lg">
                <div className="text-4xl font-bold text-muted-foreground/30 mb-4">{value.number}</div>
                <IconComponent className="w-6 h-6 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground">Meet the people behind the magic</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="relative h-64 bg-muted rounded-lg overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to work together?</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          We&apos;re always looking for talented people and exciting projects.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-3 bg-accent text-background rounded-full hover:opacity-90 transition-opacity no-underline font-medium"
          >
            Start a Project
          </Link>
          <Link
            to="/services"
            className="px-8 py-3 bg-card border border-border rounded-full hover:border-accent/50 transition-colors no-underline font-medium"
          >
            View Services
          </Link>
        </div>
      </Section>
    </div>
  )
}
