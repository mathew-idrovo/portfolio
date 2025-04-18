'use client'
import { motion } from 'motion/react'
import { ExperienceTimeline } from '../ui/Experience-timeline'
import { Button } from '@/components/ui/button'
import { Download, Link } from 'lucide-react'

export const ExperienceWork = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[var(--card)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Experiencia <span className="text-cyan-600">Laboral</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Mi trayectoria profesional en el desarrollo frontend, mostrando
              mis roles y responsabilidades en diferentes empresas.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <ExperienceTimeline />
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <Button asChild variant="outline" className="group">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="flex items-center"
              >
                Descargar CV Completo
                <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
