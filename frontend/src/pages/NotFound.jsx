import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Section } from '@/components/section'

export default function NotFoundPage() {
  return (
    <Section className="py-32 text-center">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-7xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Sorry, the page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-full hover:opacity-90 transition-opacity no-underline font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </Section>
  )
}
