'use client'

import { motion } from 'framer-motion'

export function HeroActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="relative z-10"
    >
      <button className="bg-primary-500 text-white px-12 py-5 rounded-full text-xl font-semibold hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl">
        Analyze Now
      </button>
      <p className="mt-4 text-gray-500 text-lg">
        Free to use, no registration required
      </p>
    </motion.div>
  )
}

export function TrustSignals() {
  return (
    <motion.div 
      className="text-center space-y-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
        10,000+
      </p>
      <p className="text-lg text-gray-600 font-medium">
        Conversations Analyzed
      </p>
    </motion.div>
  )
} 