'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
export default function ProjectFilter() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Desarrollo Web' },
    { id: 'ui', label: 'UI/UX' },
    { id: 'mobile', label: 'Mobile' },
  ]
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {filters.map((filter) => (
        <motion.div
          key={filter.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={activeFilter === filter.id ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveFilter(filter.id)}
            className={`rounded-full ${
              activeFilter === filter.id
                ? 'text-black bg-cyan-600 hover:bg-cyan-700 '
                : ''
            } text-white border-0`}
          >
            {filter.label}
          </Button>
        </motion.div>
      ))}
    </div>
  )
}
