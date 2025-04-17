'use client'
import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { AnimatedText } from '../Animated/AnimatedText'

export const Hero = () => {
  const y = 0 // Example initialization
  const opacity = 1 // Example initialization

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Futuristic tech background"
          fill
          className="object-cover object-center md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center h-full">
        <div className="max-w-4xl mx-auto text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              {' '}
              <AnimatedText text="Mateo Idrovo Cadena" />
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Frontend Developer especializado en React y Next.js, creando
              interfaces dinámicas, responsivas y optimizadas.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
