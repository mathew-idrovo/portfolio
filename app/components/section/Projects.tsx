'use client'
import { motion } from 'motion/react'
import ProjectFilter from '../ui/ProjectFilter'
import { projects } from '@/data/projects'
import ProjectCard from '../ui/ProjectCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32  bg-[var(--card)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
              Proyectos <span className="text-cyan-600">Destacados</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted-foreground mb-8 leading-relaxed text-[#a1a1aa]">
              Una selección de mis trabajos recientes que muestran mis
              habilidades en desarrollo, diseño y animación.
            </p>
          </motion.div>

          <ProjectFilter />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageSrc={project.imageSrc}
              link={project.link}
              githubLink={project.githubLink}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <Button asChild variant="outline" className="group border-0">
              <div className="inline-flex items-center ">
                <Link
                  href="/portfolio"
                  className="flex items-center text-white"
                >
                  Ver Todos los Proyectos
                  <ArrowRight className="ml-4 h-4 w-4 transition-transform group-hover:translate-x-1 " />
                </Link>
              </div>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects
