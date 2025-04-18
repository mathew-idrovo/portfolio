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
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Ponte en <span className="text-cyan-600">Contacto</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted-foreground mb-8 leading-relaxed">
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
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 text-cyan-600" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">
                    mateoicecua2000@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Linkedin className="h-5 w-5 mr-3 mt-1 text-cyan-600" />
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <p className="text-muted-foreground">
                    linkedin.com/in/mateo-idrovo/
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Github className="h-5 w-5 mr-3 mt-1 text-cyan-600" />
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <p className="text-muted-foreground">
                    github.com/mathew-idrovo
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6">Conectemos</h3>
            <p className="text-muted-foreground mb-6">
              Siempre estoy abierto a discutir nuevos proyectos, ideas creativas
              u oportunidades para ser parte de tu visión.
            </p>

            <div className="flex gap-4">
              <Button asChild className="group bg-cyan-600 hover:bg-cyan-700">
                <Link href="mailto:mateoicecua2000@gmail.com">
                  Enviar Email
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/resume.pdf" target="_blank">
                  Descargar CV
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 rounded-lg shadow-sm border"
          >
            <h3 className="text-2xl font-bold mb-6">Envíame un Mensaje</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
