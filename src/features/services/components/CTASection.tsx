import React from 'react'
import { motion } from 'framer-motion'

const CTASection: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="text-center mt-20">
      <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-[#0607E1] text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300">
        Get Started Today
      </motion.button>
    </motion.div>
  )
}

export default React.memo(CTASection)
