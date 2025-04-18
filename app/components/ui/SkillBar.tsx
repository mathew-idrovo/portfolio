'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface SkillBarProps {
  name: string
  percentage: number
  delay?: number
}

export const SkillBar = ({ name, percentage, delay = 0 }: SkillBarProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-white">{name}</h3>
        <span className="text-sm text-muted-foreground text-[#a1a1aa]">
          {percentage}%
        </span>
      </div>
      <div className="h-2 w-full  rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#399dbc] rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
