'use client'

import { motion } from 'framer-motion'

export function HeroActions() {
  const scrollToUpload = () => {
    const uploadSection = document.getElementById('upload')
    uploadSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="relative z-10"
    >
      <button 
        onClick={scrollToUpload}
        className="bg-primary-500 text-white px-12 py-5 rounded-full text-xl font-semibold hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
      >
        Analyze Now
      </button>
      <p className="mt-6 text-base text-gray-500">
        Get relationship clarity in seconds • 100% private analysis
      </p>
    </motion.div>
  )
}

export function TrustSignals() {
  return (
    <motion.div 
      className="mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="flex justify-center items-center space-x-16">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1">
            <span className="text-4xl font-bold text-gray-900">97</span>
            <span className="text-4xl font-bold text-primary-500">%</span>
          </div>
          <p className="text-base text-gray-600 mt-1">
            Relationship Clarity Rate
          </p>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center space-x-1">
            <span className="text-4xl font-bold text-gray-900">10,000</span>
            <span className="text-4xl font-bold text-primary-500">+</span>
          </div>
          <p className="text-base text-gray-600 mt-1">
            Chats Analyzed
          </p>
        </div>
      </div>
    </motion.div>
  )
} 