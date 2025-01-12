'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  return (
    <motion.nav 
      className="fixed w-full z-50 bg-white/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">ChatRecap</span>
            <span className="text-primary-500 font-semibold">AI</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it Works</Link>
            <button className="bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600 transition-colors">
              Try Now
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
} 