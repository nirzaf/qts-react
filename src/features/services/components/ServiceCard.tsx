import React from 'react'
import { motion } from 'framer-motion'
import { ServiceItem, AnimationVariants } from '@/features/services/types'

interface ServiceCardProps {
  service: ServiceItem
  itemVariants: AnimationVariants
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, itemVariants }) => {
  return (
    <motion.div variants={itemVariants} whileHover="hover" className="group relative h-full">
      <div className="relative h-full p-8 rounded-2xl bg-white dark:bg-gray-800 border border-[#0607E1]/5 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-75 rounded-2xl transition-opacity duration-500`} />

        <motion.div className="relative mb-6 inline-flex" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
          <div className="p-4 rounded-xl bg-[#0607E1]/5 dark:bg-white/10 group-hover:bg-[#0607E1]/5 dark:group-hover:bg-white/20 transition-colors duration-300">
            {React.createElement(service.icon, {
              className: 'w-8 h-8 text-[#0607E1]/75 dark:text-white/90',
              'aria-hidden': 'true'
            })}
          </div>
        </motion.div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-3 text-[#000000] dark:text-white group-hover:text-[#0607E1]/75 dark:group-hover:text-white/95 transition-colors duration-300 dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]">{service.title}</h3>
          <p className="text-[#000000]/70 dark:text-white/70 leading-relaxed dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{service.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default React.memo(ServiceCard)
