'use client'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ExternalLink,
  Github,
  Link,
  Linkedin,
  Mail,
} from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { ContactForm } from '../ContactForm'

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--background)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
              Ponte en <span className="text-cyan-600">Contacto</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted-foreground mb-8 leading-relaxed text-[#a1a1aa]">
              ¿Tienes un proyecto en mente o quieres discutir posibles
              colaboraciones? ¡Me encantaría saber de ti!
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Información de Contacto
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 text-cyan-600" />
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-muted-foreground text-[#a1a1aa]">
                    mateoicecua2000@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Linkedin className="h-5 w-5 mr-3 mt-1 text-cyan-600" />
                <div>
                  <h4 className="font-medium text-white">LinkedIn</h4>
                  <p className="text-muted-foreground text-[#a1a1aa]">
                    linkedin.com/in/mateo-idrovo/
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Github className="h-5 w-5 mr-3 mt-1 text-cyan-600" />
                <div>
                  <h4 className="font-medium text-white">GitHub</h4>
                  <p className="text-muted-foreground text-[#a1a1aa]">
                    github.com/mathew-idrovo
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-white">Conectemos</h3>
            <p className="text-muted-foreground mb-6 text-[#a1a1aa]">
              Siempre estoy abierto a discutir nuevos proyectos, ideas creativas
              u oportunidades para ser parte de tu visión.
            </p>

            <div className="flex gap-4">
              <Button asChild className="group bg-cyan-600 hover:bg-cyan-700">
                <div className="inline-flex items-center text-white">
                  <Link href="mailto:mateoicecua2000@gmail.com text-[#a1a1aa]">
                    Enviar Email
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Button>
              <Button asChild variant="outline">
                <div className="inline-flex items-center text-white">
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    className="text-[#a1a1aa]"
                  >
                    Descargar CV
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="bg-[var(--card)] p-8 rounded-lg shadow-sm border"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Envíame un Mensaje
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
