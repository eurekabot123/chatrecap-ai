'use client'

import { motion } from 'framer-motion'

export function HeroActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <button className="bg-primary-500 text-white px-12 py-5 rounded-full text-xl font-semibold hover:bg-primary-600 transition-colors">
        Analyze Now
      </button>
      <p className="mt-4 text-gray-500">
        Free to use, no registration required
      </p>
    </motion.div>
  )
}

export function TrustSignals() {
  return (
    <motion.div 
      className="absolute bottom-10 text-center space-y-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <p className="text-2xl font-bold text-gray-700">10,000+</p>
      <p className="text-gray-500">Conversations Analyzed</p>
    </motion.div>
  )
} 