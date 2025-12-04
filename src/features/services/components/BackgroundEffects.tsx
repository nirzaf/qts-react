import React from 'react'
import { motion } from 'framer-motion'
import FloatingServiceTexts from '@/features/services/components/FloatingServiceTexts'

const BackgroundEffects: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/80 via-white/90 to-[#f8fafc]/80 dark:from-[#0a0a0a]/80 dark:via-black/90 dark:to-[#0a0a0a]/80 backdrop-blur-[2px] z-0" />
      <FloatingServiceTexts />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute top-1/3 right-1/3 w-1/3 h-1/3 bg-gradient-to-bl from-[#0607E1]/10 to-transparent rounded-full blur-[80px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', delay: 2 }}
        className="absolute bottom-1/3 left-1/3 w-1/3 h-1/3 bg-gradient-to-tr from-[#0607E1]/10 to-transparent rounded-full blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', delay: 4 }}
        className="absolute top-2/3 left-1/4 w-1/4 h-1/4 bg-gradient-to-tr from-[#4D0AFF]/10 to-transparent rounded-full blur-[90px]"
      />
    </div>
  )
}

export default React.memo(BackgroundEffects)
