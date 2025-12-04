import React from 'react'
import { motion } from 'framer-motion'

const HeroSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <p className="text-xl text-[#000000]/70 max-w-3xl mx-auto">
        Empowering your digital transformation with cutting-edge solutions and expert services
      </p>
    </motion.div>
  )
}

export default React.memo(HeroSection)
