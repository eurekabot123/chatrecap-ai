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
      <p className="mt-6 text-base text-gray-500">
        Free to use, no registration required
      </p>
    </motion.div>
  )
}

export function TrustSignals() {
  return (
    <motion.div 
      className="text-center space-y-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="flex items-center justify-center space-x-2">
        <span className="text-4xl font-bold text-gray-900">10,000</span>
        <span className="text-4xl font-bold text-primary-500">+</span>
      </div>
      <p className="text-base text-gray-600">
        Conversations Analyzed
      </p>
    </motion.div>
  )
} 