'use client'
import { AnimatedCounter } from '@/app/components/Animated/AnimatedCounter'
import { Button } from '@/components/ui/button'
import { Download, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

export const AboutMeSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Sobre <span className="text-cyan-600">Mí</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Frontend Developer con experiencia en React y Next.js,
              especializado en la creación de interfaces dinámicas, responsivas
              y optimizadas. Cuento con conocimientos en TypeScript, Docker y
              Playwright, permitiéndome desarrollar soluciones escalables y
              aplicar pruebas automatizadas para garantizar calidad.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src="/images/profile-photo.jpg"
              alt="Mateo Idrovo"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-cyan-600/20 backdrop-blur-[2px]" />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Mi Enfoque</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Me enfoco en arquitecturas frontend eficientes, integración de
                APIs y optimización del rendimiento, priorizando la innovación,
                el aprendizaje continuo y las buenas prácticas de desarrollo.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Desarrollo interfaces interactivas con React, Next.js, WordPress
                y Joomla, enfocándome en la usabilidad, accesibilidad y
                rendimiento. Optimizo la experiencia de usuario mediante buenas
                prácticas frontend, garantizando compatibilidad con dispositivos
                y navegadores.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-cyan-600 mb-2">
                  <AnimatedCounter from={0} to={2} duration={2} />+
                </h4>
                <p className="text-sm text-muted-foreground">
                  Años de Experiencia
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-cyan-600 mb-2">
                  <AnimatedCounter from={0} to={15} duration={2} />+
                </h4>
                <p className="text-sm text-muted-foreground">
                  Proyectos Completados
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-cyan-600 mb-2">
                  <AnimatedCounter from={0} to={10} duration={2} />+
                </h4>
                <p className="text-sm text-muted-foreground">
                  Clientes Satisfechos
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-cyan-600 mb-2">
                  <AnimatedCounter from={0} to={8} duration={2} />+
                </h4>
                <p className="text-sm text-muted-foreground">Certificaciones</p>
              </div>
            </div>

            <div className="flex gap-4">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://github.com/mathew-idrovo"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://www.linkedin.com/in/mateo-idrovo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="mailto:mateoicecua2000@gmail.com"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Resume"
                  >
                    <Download className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
