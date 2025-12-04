import { LucideIcon } from 'lucide-react'
import { Variants } from 'framer-motion'

export interface ServiceItem {
  title: string
  description: string
  icon: LucideIcon
  gradient: string
}

export type AnimationVariants = Variants
