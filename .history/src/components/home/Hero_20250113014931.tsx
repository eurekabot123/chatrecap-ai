'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center px-4">
      {/* Main Title Area */}
      <div className="text-center space-y-6 max-w-3xl">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover the 
          <span className="text-primary-500"> True Meaning </span>
          Behind Every Message
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Upload your chat history and get AI-powered insights in seconds
        </motion.p>

        {/* Upload Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-600 transition-colors">
            Analyze Now
          </button>
          <p className="mt-2 text-sm text-gray-500">Free to use, no registration required</p>
        </motion.div>
      </div>

      {/* Trust Signals */}
      <motion.div 
        className="absolute bottom-10 text-center space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-2xl font-bold text-gray-700">10,000+</p>
        <p className="text-gray-500">Conversations Analyzed</p>
      </motion.div>
    </div>
  )
} 