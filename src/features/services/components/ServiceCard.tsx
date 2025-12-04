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
      <div className="relative h-full p-8 rounded-2xl bg-white border border-[#0607E1]/5 shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-75 rounded-2xl transition-opacity duration-500`} />

        <motion.div className="relative mb-6 inline-flex" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
          <div className="p-4 rounded-xl bg-[#0607E1]/5 group-hover:bg-[#0607E1]/5 transition-colors duration-300">
            {React.createElement(service.icon, {
              className: 'w-8 h-8 text-[#0607E1]/75',
              'aria-hidden': 'true'
            })}
          </div>
        </motion.div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-3 text-[#000000] group-hover:text-[#0607E1]/75 transition-colors duration-300">{service.title}</h3>
          <p className="text-[#000000]/70 leading-relaxed">{service.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default React.memo(ServiceCard)
