'use client'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageSrc: string
  link: string
  githubLink?: string
  delay?: number
}
export default function ProjectCard({
  title,
  description,
  tags = [], // Provide default empty array
  imageSrc,
  link,
  githubLink,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="group bg-card rounded-lg overflow-hidden shadow-sm border border-border h-full flex flex-col"
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageSrc || '/placeholder.svg'}
            alt={title || 'Project'}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
        <div className="p-6 flex-grow flex flex-col bg-[#09090b]">
          <h3 className="text-xl font-bold mb-2 text-cyan-600">
            {title || 'Untitled Project'}
          </h3>
          <p className="text-muted-foreground mb-4 flex-grow text-[#a1a1aa]">
            {description || 'No description available'}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags &&
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground text-[#53d4ef] bg-[#2b4d56]"
                >
                  {tag}
                </span>
              ))}
          </div>
          <div className="flex gap-2 mt-auto">
            {link && (
              <Button asChild size="sm" variant="outline" className="flex-1">
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-white border-0"
                >
                  Live Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            {githubLink && (
              <Button asChild size="sm" variant="outline" className="flex-1">
                <Link
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-white border-0"
                >
                  Code
                  <Github className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
