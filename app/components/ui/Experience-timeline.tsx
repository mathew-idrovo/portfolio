import { Briefcase } from 'lucide-react'
import { motion } from 'motion/react'

export const ExperienceTimeline = () => {
  const experiences = [
    {
      id: 1,
      role: 'Frontend Developer',
      company: 'Finanzauto S.A.S',
      period: 'Nov 2024 - Actual',
      description:
        'Desarrollo de interfaces interactivas con React, Next.js, WordPress y Joomla, enfocándome en la usabilidad, accesibilidad y rendimiento. Optimizo la experiencia de usuario mediante buenas prácticas frontend, garantizando compatibilidad con dispositivos y navegadores. Además, personalizo y optimizo sitios en WordPress, mejorando su velocidad de carga y seguridad.',
      technologies: [
        'React',
        'Next.js',
        'WordPress',
        'Joomla',
        'CSS',
        'JavaScript',
      ],
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'LintBusiness',
      period: 'Jul 2023 - Sept 2024',
      description:
        'Colaboré en el desarrollo del frontend de Simón Movilidad, una plataforma de monitoreo GPS, contribuyendo a la mejora de su escalabilidad, adaptabilidad y funcionalidades de mapeo. Desarrollé y mantuve aplicaciones web con React y Next.js, optimizando interfaces para garantizar una experiencia fluida e intuitiva.',
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Playwright',
        'Docker',
        'Git',
      ],
    },
  ]
  return (
    <div className="relative w-full">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#399dbc] z-0" />

      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Timeline dot */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-cyan-300 border-2 border-cyan-600 flex items-center justify-center z-10">
            <Briefcase className="h-5 w-5 text-cyan-600" />
          </div>

          {/* Content */}
          <div
            className={`md:w-1/2 ${
              index % 2 === 0 ? 'md:pr-16 text-right' : 'md:pl-16'
            } pl-16 md:pl-0`}
          >
            <div className="bg-[#09090b] p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-[#53d4ef]">{exp.role}</h3>
              <p className="text-cyan-600 font-medium">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-4 text-[#6e6e75]">
                {exp.period}
              </p>
              <p className="text-muted-foreground mb-4 text-[#a1a1aa]">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-start ">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground text-[#53d4ef] bg-[#2b4d56]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Empty div for layout */}
          <div className="md:w-1/2" />
        </motion.div>
      ))}
    </div>
    // <div className="relative w-full">
    //   {/* línea vertical */}
    //   <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#399dbc]" />

    //   {experiences.map((exp, i) => (
    //     <motion.div
    //       key={exp.id}
    //       initial={{ opacity: 0, y: 50 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true, margin: '-100px' }}
    //       transition={{ duration: 0.5, delay: i * 0.2 }}
    //       className={`
    //       relative flex flex-col md:flex-row gap-8 mb-12
    //       ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}
    //     `}
    //     >
    //       {/* pin centrado */}
    //       <div className="absolute left-1/2 -translate-x-1/2 -top-5 w-10 h-10 bg-background border-2 border-cyan-600 rounded-full flex items-center justify-center">
    //         <Briefcase className="h-5 w-5 text-cyan-600" />
    //       </div>

    //       {/* tarjeta de contenido */}
    //       <div
    //         className={`md:w-1/2 w-full ${
    //           i % 2 === 0 ? 'md:pr-16 text-right' : 'md:pl-16'
    //         }`}
    //       >
    //         <div className="bg-card p-6 rounded-lg shadow-sm border">
    //           {/* …tu contenido… */}
    //         </div>
    //       </div>

    //       {/* espacio vacío para layout */}
    //       <div className="md:w-1/2 hidden md:block" />
    //     </motion.div>
    //   ))}
    // </div>
  )
}
