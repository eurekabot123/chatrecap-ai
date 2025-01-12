'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CloudArrowUpIcon } from '@heroicons/react/24/outline'

export function UploadArea() {
  const [isDragging, setIsDragging] = useState(false)
  const [showEarlyAccess, setShowEarlyAccess] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

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
    setShowEarlyAccess(true)
  }

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以添加实际的邮件收集逻辑
    setIsSubmitted(true)
  }

  return (
    <div className="relative">
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
        onClick={() => !showEarlyAccess && document.getElementById('file-input')?.click()}
      >
        <input
          type="file"
          id="file-input"
          className="hidden"
          accept="image/*"
          multiple
          onChange={() => setShowEarlyAccess(true)}
        />
        
        {!showEarlyAccess ? (
          <>
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
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  🚀 Coming Soon!
                </h3>
                <p className="text-gray-600 mb-6">
                  Be among the first to experience our AI-powered chat analysis.
                  Join our waiting list for early access!
                </p>
                <form onSubmit={handleSubmitEmail} className="space-y-4">
                  <div className="flex max-w-md mx-auto">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-2 bg-primary-500 text-white rounded-r-lg hover:bg-primary-600 transition-colors"
                    >
                      Join
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  🎉 You're on the list!
                </h3>
                <p className="text-gray-600">
                  We&apos;ll notify you as soon as we launch. Thank you for your interest!
                </p>
              </>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
} 