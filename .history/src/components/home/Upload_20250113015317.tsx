'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CloudArrowUpIcon } from '@heroicons/react/24/outline'

export default function Upload() {
  const [isDragging, setIsDragging] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    // Here we'll handle the file upload later
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      // Show premium prompt or analysis results
    }, 2000)
  }

  return (
    <section className="py-20" id="upload">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Your Analysis
          </h2>
          <p className="text-xl text-gray-600">
            Upload your chat history and get instant insights
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Upload Area */}
          <div
            className={`
              border-2 border-dashed rounded-xl p-12
              flex flex-col items-center justify-center
              transition-colors cursor-pointer
              ${isDragging ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-400'}
            `}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-input')?.click()}
          >
            <input
              type="file"
              id="file-input"
              className="hidden"
              accept="image/*"
              multiple
            />
            
            <CloudArrowUpIcon className={`w-16 h-16 mb-4 ${isDragging ? 'text-primary-500' : 'text-gray-400'}`} />
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Drop your chat screenshots here
            </h3>
            <p className="text-gray-600 mb-4">
              or click to select files
            </p>
            <p className="text-sm text-gray-500">
              Supports WhatsApp, iMessage, and more
            </p>
          </div>

          {/* Loading Overlay */}
          {isLoading && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-gray-600">Analyzing your conversation...</p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Supported Formats */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-gray-500">
            Supported formats: JPG, PNG • Max file size: 10MB
          </p>
        </motion.div>
      </div>
    </section>
  )
} 