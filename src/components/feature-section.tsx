import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface FeatureSectionProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureSection({ icon, title, description, className }: FeatureSectionProps) {
  return (
    <div className={cn(
      "text-center p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
      className
    )}>
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  )
}