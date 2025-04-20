import Link from 'next/link'
import {
  ArrowRight,
  Building,
  Box,
  Layout,
  MessageSquare,
  Monitor,
  Palette,
  Zap,
  Smartphone,
  Globe,
  CheckCircle,
  Code,
  type LucideIcon,
} from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
}

export const ServiceCard = ({
  title,
  description,
  icon,
  href,
}: ServiceCardProps) => {
  const IconComponent = getIcon(icon)
  return (
    <div className="p-8 border border-gray-200 hover:border-cyan-200 transition-colors group rounded-lg hover:shadow-md">
      <div className="mb-6 text-cyan-600">
        <IconComponent className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-700"
      >
        Saber más
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}
function getIcon(iconName: string): LucideIcon {
  switch (iconName) {
    case 'Building':
      return Building
    case 'Box':
      return Box
    case 'Layout':
      return Layout
    case 'MessageSquare':
      return MessageSquare
    case 'Monitor':
      return Monitor
    case 'Palette':
      return Palette
    case 'Zap':
      return Zap
    case 'Smartphone':
      return Smartphone
    case 'Globe':
      return Globe
    case 'CheckCircle':
      return CheckCircle
    case 'Code':
      return Code
    default:
      return Layout
  }
}
