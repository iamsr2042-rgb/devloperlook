import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/section'

const services = [
  {
    title: 'UI/UX Design',
    description: 'Create beautiful and intuitive user interfaces that your users will love.',
    features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
  },
  {
    title: 'Web Development',
    description: 'Build modern, responsive websites that perform across all devices.',
    features: ['React', 'Next.js', 'Full Stack', 'Performance'],
  },
  {
    title: 'Brand Strategy',
    description: 'Develop a cohesive brand identity that resonates with your audience.',
    features: ['Logo Design', 'Brand Guidelines', 'Messaging', 'Visual Identity'],
  },
  {
    title: 'Mobile Apps',
    description: 'Create native and cross-platform mobile applications.',
    features: ['iOS', 'Android', 'React Native', 'User Experience'],
  },
]

export default function ServicesPage() {
  return (
    <div>
      <Section className="py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground">
            We offer comprehensive digital solutions tailored to your business needs.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <div className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all no-underline font-medium"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20 text-center bg-card border border-border rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Let&apos;s discuss your project and how we can help bring your vision to life.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-background rounded-full hover:opacity-90 transition-opacity no-underline font-medium"
        >
          Get in Touch
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Section>
    </div>
  )
}
