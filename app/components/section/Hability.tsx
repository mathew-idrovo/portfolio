'use client'
import { skills } from '@/data/skills'
import { motion } from 'motion/react'
import { SkillBar } from '../ui/SkillBar'

export default function Hability() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-[var(--background)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
              Mis <span className="text-cyan-600">Habilidades</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted-foreground mb-8 leading-relaxed text-[#a1a1aa]">
              He desarrollado experiencia en diversas tecnologías y principios
              de diseño, lo que me permite crear soluciones completas para
              proyectos web.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            {skills.slice(0, 5).map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={0.1 * (index + 1)}
              />
            ))}
          </div>
          <div className="space-y-6">
            {skills.slice(5, 10).map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={0.1 * (index + 5)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
