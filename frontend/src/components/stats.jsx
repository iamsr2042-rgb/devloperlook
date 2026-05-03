"use client"

import * as React from "react"
import { useInView, useCounter } from "@/hooks/use-animations"

const stats = [
 { value: 150, suffix: "+", label: "Projects Completed" },
 { value: 98, suffix: "%", label: "Client Satisfaction" },
 { value: 12, suffix: "+", label: "Years Experience" },
 { value: 50, suffix: "+", label: "Happy Clients" },
]

function StatItem({ stat }: { stat: typeof stats[0] }) {
 const { ref, isInView } = useInView()
 const { count, startCounter } = useCounter(stat.value, 2000)

 React.useEffect(() => {
 if (isInView) {
 startCounter()
 }
 }, [isInView, startCounter])

 return (
 <div
 ref={ref as React.RefObject}
 className="text-center group"
 >
 
 <span
 className="text-5xl md:text-6xl lg:text-7xl font-medium counter-value transition-colors group-hover:text-accent"
 style={{ fontFamily: 'var(--font-display)' }}
 >
 {count}
 
 <span
 className="text-3xl md:text-4xl lg:text-5xl font-medium text-accent"
 style={{ fontFamily: 'var(--font-display)' }}
 >
 {stat.suffix}
 
 
 
 {stat.label}
 
 
 )
}

export function StatsSection() {
 return (
 
 
 
 {stats.map((stat) => (
 
 ))}
 
 
 
 )
}
