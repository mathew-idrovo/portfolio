'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'

import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Update active section based on scroll position only on homepage
      if (pathname === '/') {
        const sections = [
          'home',
          'about',
          'experience',
          'skills',
          'projects',
          'contact',
        ]

        for (const section of sections.reverse()) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 100) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => {
    if (path.startsWith('#') && pathname === '/') {
      return activeSection === path.substring(1)
    }
    return pathname === path
  }

  // Función para obtener la URL correcta dependiendo de la página actual
  const getHref = (path: string) => {
    // Si es un enlace de sección (#) y no estamos en la página principal
    if (path.startsWith('#') && pathname !== '/') {
      return '/' + path // Añadir la ruta principal antes del #
    }
    return path
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container h-[60px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold">
              <span className="text-cyan-600">Mateo</span>
              {''}
              <span className="text-white"> Idrovo</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 mt-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                href={getHref('#about')}
                className={`text-sm text-white  hover:text-cyan-600 transition-colors ${
                  isActive('#about') ? 'text-cyan-600 font-medium' : ''
                }`}
              >
                Sobre Mí
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href={getHref('#experience')}
                className={`text-sm text-white hover:text-cyan-600 transition-colors ${
                  isActive('#experience') ? 'text-cyan-600 font-medium' : ''
                }`}
              >
                Experiencia
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href={getHref('#skills')}
                className={`text-sm text-white hover:text-cyan-600 transition-colors ${
                  isActive('#skills') ? 'text-cyan-600 font-medium' : ''
                }`}
              >
                Habilidades
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/portfolio"
                className={`text-sm text-white hover:text-cyan-600 transition-colors ${
                  isActive('/portfolio') ? 'text-cyan-600 font-medium' : ''
                }`}
              >
                Portfolio
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/services"
                className={`text-sm text-white hover:text-cyan-600 transition-colors ${
                  isActive('/services') ? 'text-cyan-600 font-medium' : ''
                }`}
              >
                Servicios
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href={getHref('#contact')}
                className={`text-sm text-white hover:text-cyan-600 transition-colors ${
                  isActive('#contact') ? 'text-cyan-600 font-medium' : ''
                }`}
              >
                Contacto
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {/* <ThemeToggle /> */}
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                <Link href={getHref('#contact')}>Contáctame</Link>
              </Button>
            </motion.div> */}
          </nav>

          {/* Mobile Menu Button */}
          {/* <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <Link
                href={getHref('#about')}
                className={`text-foreground text-sm text-white hover:text-cyan-600 transition-colors py-2 ${
                  isActive('#about') ? 'text-cyan-600 font-medium' : ''
                }`}
                onClick={closeMenu}
              >
                Sobre Mí
              </Link>
              <Link
                href={getHref('#experience')}
                className={`text-foreground text-sm text-white hover:text-cyan-600 transition-colors py-2 ${
                  isActive('#experience') ? 'text-cyan-600 font-medium' : ''
                }`}
                onClick={closeMenu}
              >
                Experiencia
              </Link>
              <Link
                href={getHref('#skills')}
                className={`text-foreground text-sm text-white hover:text-cyan-600 transition-colors py-2 ${
                  isActive('#skills') ? 'text-cyan-600 font-medium' : ''
                }`}
                onClick={closeMenu}
              >
                Habilidades
              </Link>
              <Link
                href="/portfolio"
                className={`text-foreground text-sm text-white hover:text-cyan-600 transition-colors py-2 ${
                  isActive('/portfolio') ? 'text-cyan-600 font-medium' : ''
                }`}
                onClick={closeMenu}
              >
                Portfolio
              </Link>
              <Link
                href="/services"
                className={`text-foreground text-sm text-white hover:text-cyan-600 transition-colors py-2 ${
                  isActive('/services') ? 'text-cyan-600 font-medium' : ''
                }`}
                onClick={closeMenu}
              >
                Servicios
              </Link>
              <Link
                href={getHref('#contact')}
                className={`text-foreground text-sm text-white hover:text-cyan-600 transition-colors py-2 ${
                  isActive('#contact') ? 'text-cyan-600 font-medium' : ''
                }`}
                onClick={closeMenu}
              >
                Contacto
              </Link>
              <Button
                asChild
                className="w-full bg-cyan-600 hover:bg-cyan-700"
                onClick={closeMenu}
              >
                <Link href={getHref('#contact')}>Contáctame</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
