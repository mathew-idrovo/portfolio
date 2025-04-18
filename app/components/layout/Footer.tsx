import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#18181a] py-12 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-cyan-600">Mateo</span>{' '}
              <span className="text-white">Idrovo</span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6 text-[#a1a1aa]">
              Frontend Developer especializado en React y Next.js, creando
              interfaces dinámicas, responsivas y optimizadas con enfoque en la
              experiencia de usuario.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/mathew-idrovo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-[#a1a1aa]" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mateo-idrovo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-[#a1a1aa]" />
              </Link>
              <Link
                href="mailto:mateoicecua2000@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-[#a1a1aa]" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4 text-white">
              Navegación
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-muted-foreground hover:text-foreground transition-colors text-[#a1a1aa]"
                >
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link
                  href="/#experience"
                  className="text-muted-foreground hover:text-foreground transition-colors text-[#a1a1aa]"
                >
                  Experiencia
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  className="text-muted-foreground hover:text-foreground transition-colors text-[#a1a1aa]"
                >
                  Habilidades
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-muted-foreground hover:text-foreground transition-colors text-[#a1a1aa]"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors text-[#a1a1aa]"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4 text-white">
              Servicios
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-[#a1a1aa]"
                >
                  Desarrollo Frontend
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-[#a1a1aa]"
                >
                  Desarrollo React/Next.js
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-[#a1a1aa]"
                >
                  Optimización Web
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-[#a1a1aa]"
                >
                  Diseño Responsivo
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-[#a1a1aa]"
                >
                  Desarrollo WordPress
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#a1a1aa] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm text-[#a1a1aa]">
            &copy; {new Date().getFullYear()} Mateo Idrovo. Todos los derechos
            reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm text-[#a1a1aa]"
            >
              Política de Privacidad
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm text-[#a1a1aa]"
            >
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
